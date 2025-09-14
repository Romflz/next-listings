import { PrismaClient, ListingType, Role } from '@/generated/prisma'
const prisma = new PrismaClient()

import localities from '@/shared/constants/localities'
import amenities from '@/shared/constants/amenities'
import uploaded from '@/shared/constants/listingImages'

// ---------------------------- SCRIPT TOGGLES ----------------------------
const PER_LOCALITY = 10 // <-- change this number whenever you want
const seedAmenities = true // ✅ Set to true to seed/update amenities
const seedLocalities = true // ✅ Set to true to seed/update localities
const seedListings = true // ✅ Set to true to seed example listings
const nukeDbListings = false // ⚠️ Set to true to DELETE ALL EXISTING LISTINGS before seeding new ones

// Tiny seeded PRNG so results are "random" but deterministic per locality index.
function seeded(seed: number) {
  let t = seed >>> 0 // keep it unsigned
  return () => {
    t = (t * 1664525 + 1013904223) >>> 0 // LCG, stays unsigned
    return t / 0x100000000 // 0x100000000 === 4294967296
  }
}

function pickN<T>(arr: T[], n: number, rnd: () => number): T[] {
  const a: T[] = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1))
    const tmp = a[i] as T
    a[i] = a[j] as T
    a[j] = tmp
  }
  return a.slice(0, Math.max(1, Math.min(n, a.length)))
}

function randomPhone(rnd: () => number) {
  const prefixes = ['77', '79', '99']
  const pref = prefixes[Math.floor(rnd() * prefixes.length)]
  const tail = Math.floor(100000 + rnd() * 899999)
    .toString()
    .padStart(6, '0')
  return `${pref}${tail}` // 8 digits total
}

const amenitySlugs: string[] = amenities.map((a) => a.slug)

// Coastal-ish localities get a price premium
const premiumSlugs = /(sliema|st-julians|st-pauls-bay|valletta|gzira|msida|mellieha|swieqi|bugibba|qawra|xaghra|nadur|rabat-gozo|zebbug-gozo)/i

export const listings = localities.flatMap((loc, idx) => {
  const rnd = seeded(idx + 1)

  const makeListing = (type: ListingType) => {
    const ensuite = rnd() < 0.55
    const coastalPremium = premiumSlugs.test(loc.slug) ? 180 : 0

    const base = type === ListingType.PRIVATE_ROOM ? 600 + rnd() * 180 + coastalPremium : 420 + rnd() * 120 + Math.floor(coastalPremium * 0.6)

    const price = Math.round(base / 10) * 10

    // Dates between Sept 10, 2025 and Dec 15, 2025 (UTC)
    const dayOffset = 10 + Math.floor(rnd() * 96)
    const available_from = new Date(Date.UTC(2025, 8, dayOffset, 0, 0, 0)) // month 8 = September

    const bedrooms = 2 + Math.floor(rnd() * 3) // 2-4
    const bathrooms = 1 + Math.floor(rnd() * 2) // 1-2
    const occupants = Math.max(2, bedrooms + (rnd() < 0.4 ? 1 : 0))

    const title = type === ListingType.PRIVATE_ROOM ? `Private Room in ${loc.name}` : `Shared Room in ${loc.name}`

    const color1 = Math.floor(rnd() * 0xffffff)
      .toString(16)
      .padStart(6, '0')
    const color2 = Math.floor(rnd() * 0xffffff)
      .toString(16)
      .padStart(6, '0')

    const chosenAmenities = Array.from(
      new Set(pickN(amenitySlugs, 5 + Math.floor(rnd() * 6), rnd)) // 5–10 amenities
    )

    return {
      title,
      description: `${ensuite ? 'Ensuite ' : ''}${type === ListingType.PRIVATE_ROOM ? 'private' : 'shared'} room in a ${bedrooms}-bedroom apartment in ${
        loc.name
      }. Close to amenities and public transport.`,
      price: Number(price.toFixed(0)),
      images: [`https://placehold.co/600x400/${color1}/FFFFFF/png`, `https://placehold.co/600x400/${color2}/000000/png`],
      available_from,
      street_name: `Triq ${loc.name.split(/[ (]/)[0]}`,
      listingType: type,
      ensuite,
      contactNumberExtension: '+356',
      contactNumber: randomPhone(rnd),
      totalBedrooms: bedrooms,
      totalBathrooms: bathrooms,
      totalOccupants: occupants,
      amenities: chosenAmenities,
      maxGuestsInRoom: type === ListingType.PRIVATE_ROOM ? 1 : 2 + Math.floor(rnd() * 2), // 2–3
      localitySlug: loc.slug,
    }
  }

  return Array.from({ length: PER_LOCALITY }, (_, i) => makeListing(i % 2 === 0 ? ListingType.PRIVATE_ROOM : ListingType.SHARED_ROOM))
})

// =================================================================
// SEED SCRIPT
// =================================================================

async function main() {
  console.log(`Start seeding ...`)

  // ----------------- 1. SEED AMENITIES -----------------
  if (seedAmenities) {
    console.log('Seeding amenities...')
    for (const amenity of amenities) {
      await prisma.amenity.upsert({
        where: { slug: amenity.slug },
        update: { label: amenity.label },
        create: {
          slug: amenity.slug,
          label: amenity.label,
        },
      })
    }
    console.log(`${amenities.length} amenities have been seeded.`)
  }

  // ----------------- 2. SEED LOCALITIES -----------------
  if (seedLocalities) {
    console.log('Seeding localities...')
    for (const loc of localities) {
      await prisma.locality.upsert({
        where: { slug: loc.slug },
        update: { name: loc.name },
        create: {
          name: loc.name,
          slug: loc.slug,
        },
      })
    }
    console.log(`${localities.length} localities have been seeded.`)
  }

  // ----------------- 3. SEED LISTINGS -----------------
  if (seedListings) {
    console.log('Seeding listings...')
    const userId = '7fd96d38-55e6-4d07-95cd-588716ccf8ec'

    // Ensure a user exists to satisfy FK
    await prisma.user.upsert({
      where: { id: userId },
      update: {},
      create: {
        id: userId,
        f_user_id: 'auth0|seeduser', // Example placeholder
        email: 'seed-user@example.com',
        email_verified: true,
        name: 'Seed User',
        role: Role.USER,
      },
    })
    console.log(`Ensured user exists with ID: ${userId}`)

    // Start fresh

    if (nukeDbListings) {
      const { count } = await prisma.listings.deleteMany({})
      console.log(`Deleted ${count} existing listings.`)
    }

    // Create new listings and connect amenities
    for (const listingData of listings) {
      const { amenities: amenitySlugsForListing, localitySlug, ...rest } = listingData

      // pick 2–4 random images from uploaded
      const images = pickN(uploaded, 2 + Math.floor(Math.random() * 3), Math.random)

      await prisma.listings.create({
        data: {
          ...rest,
          images,
          user: { connect: { id: userId } },
          locality: { connect: { slug: localitySlug } },
          amenities: {
            create: amenitySlugsForListing.map((slug) => ({
              amenity: { connect: { slug } },
            })),
          },
        },
      })
    }
    console.log(`${listings.length} listings have been seeded.`)
  }

  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
