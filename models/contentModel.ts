import { ListingType } from '../generated/prisma'
import { popularLocalities } from '@/shared/constants/localities'

import PrismaClient from '@/shared/lib/prisma/prisma'

export async function getNewListingCounts() {
  // 1. Calculate the date and time for 24 hours ago from now.
  const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000)

  // 2. Use `groupBy` to count listings created since that time, grouped by their type.
  const newCountsByType = await PrismaClient.listings.groupBy({
    by: ['listingType'], // Group the results by the 'listingType' field.
    where: {
      createdAt: {
        gte: twentyFourHoursAgo, // 'gte' means "greater than or equal to".
      },
    },
    _count: {
      listingType: true, // Count the number of items in each group.
    },
  })

  // 3. Format the raw result into a clean object.
  const result = {
    privateRooms: 0,
    sharedRooms: 0,
    total: 0,
  }

  for (const group of newCountsByType) {
    const count = group._count.listingType
    if (group.listingType === ListingType.PRIVATE_ROOM) {
      result.privateRooms = count
    } else if (group.listingType === ListingType.SHARED_ROOM) {
      result.sharedRooms = count
    }
  }

  // Calculate the total by adding up the counts for each type.
  result.total = result.privateRooms + result.sharedRooms

  return result
}

export async function getHomeListings(loggedIn: boolean) {
  const listingsByLocality = await Promise.all(
    popularLocalities.map(async (locality) => {
      const listings = await PrismaClient.listings.findMany({
        where: { localitySlug: locality.slug },
        take: 6,
        orderBy: { createdAt: 'desc' }, // newest first
        select: {
          id: true,
          title: true,
          description: true,
          price: true,
          images: true,
          available_from: true,
          street_name: true,
          listingType: true,
          ensuite: true,
          totalBedrooms: true,
          totalBathrooms: true,
          totalOccupants: true,
          maxGuestsInRoom: true,
        },
      })

      return {
        locality: locality.name,
        localitySlug: locality.slug,
        listings,
      }
    })
  )

  // Only return localities that actually have listings
  return listingsByLocality.filter((group) => group.listings.length > 0)
}

export async function getSingleListing(id: string, loggedIn: boolean) {
  const listing = await PrismaClient.listings.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      title: true,
      description: true,
      price: true,
      images: true,
      available_from: true,
      street_name: true,
      listingType: true,
      ensuite: true,
      totalBedrooms: true,
      totalBathrooms: true,
      totalOccupants: true,
      amenities: {
        select: {
          amenity: { select: { id: true, slug: true, label: true } },
        },
      },
      maxGuestsInRoom: true,
      createdAt: true,
      updatedAt: true,
      locality: {
        select: {
          name: true,
          slug: true,
        },
      },
      user: {
        select: {
          id: true,
          name: true,
          picture: true,
          email: loggedIn ? true : false, // Only show email if logged in
          reviewsReceived: {
            select: {
              id: true,
              rating: true,
              comment: true,
              createdAt: true,
              author: {
                select: {
                  name: true,
                  picture: true,
                },
              },
            },
            take: 10, // Limit to recent 10 reviews
            orderBy: {
              createdAt: 'desc',
            },
          },
        },
      },
      // Conditionally include contact info based on login status
      ...(loggedIn && {
        contactNumber: true,
        contactNumberExtension: true,
      }),
    },
  })

  return listing
}
// Helper function to get listings by locality
export async function getListingsByLocality(localitySlug: string, loggedIn: boolean, page: number = 1, limit: number = 20) {
  const skip = (page - 1) * limit

  const [listings, total] = await Promise.all([
    PrismaClient.listings.findMany({
      where: {
        localitySlug,
      },
      skip,
      take: limit,
      select: {
        id: true,
        title: true,
        price: true,
        images: true,
        available_from: true,
        street_name: true,
        listingType: true,
        ensuite: true,
        totalBedrooms: true,
        totalBathrooms: true,
        totalOccupants: true,
        maxGuestsInRoom: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    }),
    PrismaClient.listings.count({
      where: {
        localitySlug,
      },
    }),
  ])

  return {
    listings,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  }
}
