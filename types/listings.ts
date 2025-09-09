export interface Amenity {
  id: number
  slug: string
  label: string
}

export interface Listing {
  id: string
  title: string
  description?: string | null
  price: number
  images: string[]
  available_from: string
  street_name: string
  listingType: 'PRIVATE_ROOM' | 'SHARED_ROOM'
  ensuite: boolean
  totalBedrooms: number
  totalBathrooms: number
  totalOccupants: number
  maxGuestsInRoom: number
  createdAt: string
  updatedAt: string
  amenities: Amenity[]
  locality: {
    name: string
    slug: string
  }
  user: {
    id: string
    name: string | null
    picture: string | null
  }
  contactNumber?: string | null
  contactNumberExtension?: string | null
}

export interface HomeListingGroup {
  locality: string
  localitySlug: string
  listings: Listing[]
}
