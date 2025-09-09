'use client'
import Link from 'next/link'

import { HomeListingGroup, Listing } from '@/types/listings'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'


export default function HomeSlider({ listingGroup }: { listingGroup: HomeListingGroup }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="mb-8">
      {/* Section Header */}
      <div className="flex items-center justify-between px-5 py-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{listingGroup.locality}</h3>
            <p className="text-xs text-gray-500">{listingGroup.listings.length} available rooms</p>
          </div>
        </div>
        <button className="text-sm font-medium text-indigo-600 hover:text-purple-600 transition-colors flex items-center gap-1">
          View all
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Listings Container */}
      <div className="px-4">
        {!isClient ? (
          // SSR Skeleton with real data for SEO
          <div className="flex gap-4 xs:gap-5 sm:gap-6">
            {listingGroup.listings.slice(0, 4).map((slide, i) => (
              <div key={slide.id} className={`flex-1 ${i === 0 ? '' : i === 1 ? 'hidden xs:block' : i === 2 ? 'hidden md:block' : 'hidden lg:block'}`}>
                <ListingCard listing={slide} skeleton />
              </div>
            ))}
          </div>
        ) : (
          // Client-side Swiper
          <Swiper
            modules={[FreeMode]}
            slidesPerView={1}
            spaceBetween={16}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 18 },
              768: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
          >
            {listingGroup.listings.map((slide) => (
              <SwiperSlide key={slide.id}>
                <ListingCard listing={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  )
}

function ListingCard({ listing, skeleton = false }: { listing: Listing; skeleton?: boolean }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }

  return (
    <Link href={`/property/${listing.id}`} className="block">
      <div className="listing-card group cursor-pointer">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          {skeleton ? (
            // Skeleton image for SSR
            <div className="aspect-[4/3] bg-gray-200 animate-pulse" />
          ) : (
            // Real image on client
            <>
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  src={listing.images[0]}
                  alt={listing.title}
                  loading="lazy"
                />
              </div>

              {/* Price Badge */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                <span className="text-lg font-bold text-gray-900">€{listing.price}</span>
                <span className="text-xs text-gray-600">/month</span>
              </div>

              {/* Room Type Badge */}
              <div className="absolute top-3 right-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1.5 rounded-full shadow-lg flex">
                <span className="text-xs font-medium">{listing.listingType === 'PRIVATE_ROOM' ? 'Private' : 'Shared'}</span>
              </div>
            </>
          )}
        </div>

        {/* Card Content - Always rendered for SEO */}
        <div className="mt-3 px-1">
          <h4 className="font-semibold text-gray-900 truncate">{listing.title}</h4>
          <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {listing.street_name}
          </p>

          {/* Room Details */}
          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="text-xs text-gray-600">{listing.totalBedrooms} beds</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-xs text-gray-600">{listing.totalOccupants} people</span>
            </div>
            {listing.ensuite && (
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs text-gray-600">Ensuite</span>
              </div>
            )}
          </div>

          {/* Available Date */}
          <div className="mt-3 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-gray-500">Available from {formatDate(listing.available_from)}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
