'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { type QuickFilter, quickFilters } from '../constants/quickFilters'

interface SearchParams {
  location: string
  roomType: string
  minPrice: string
  maxPrice: string
  moveInDate: string
  [key: string]: string | boolean | number // for dynamic amenity filters
}

export default function Hero() {
  const router = useRouter()

  // -----------------------------
  // React replacement for v-model
  // -----------------------------
  const [searchParams, setSearchParams] = useState<SearchParams>({
    location: '',
    roomType: '',
    minPrice: '',
    maxPrice: '',
    moveInDate: '',
    // amenity flags will be created as booleans as users click quick filters
  })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Convert all values to strings for URLSearchParams
    const queryParams: Record<string, string> = {}

    Object.entries(searchParams).forEach(([key, value]) => {
      // Only add non-empty values
      if (value !== '' && value != null && value !== false) {
        // Convert everything to string
        queryParams[key] = String(value)
      }
    })

    const qs = new URLSearchParams(queryParams).toString()
    router.push(`/search?${qs}`)
  }

  const updateField = (field: keyof SearchParams) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { type, value } = e.target
    // Keep number inputs as numbers when filled, but allow '' when cleared
    const next = type === 'number' && value !== '' ? Number(value) : value
    setSearchParams((prev) => ({ ...prev, [field]: next }))
  }

  const isFilterActive = (f: QuickFilter) => {
    return Object.keys(f.filter).every((key) => Boolean(searchParams[key]))
  }

  const applyQuickFilter = (f: QuickFilter) => {
    setSearchParams((prev) => {
      const currentlyActive = Object.keys(f.filter).every((k) => Boolean(prev[k]))
      // Toggle: if already active, turn off; otherwise turn on
      const next = { ...prev }
      for (const [k, v] of Object.entries(f.filter)) {
        next[k] = currentlyActive ? false : v
      }
      return next
    })
  }

  return (
    <section className="relative overflow-hidden max-w-7xl mx-auto bg-white hero-header">
      <div
        className="relative z-10 pb-16 pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-32 lg:pb-24 rounded-b-2xl lg:rounded-2xl"
        style={{
          backgroundImage: `radial-gradient(ellipse at center, rgba(99, 102, 241, 0.3), rgba(30, 41, 59, 0.8)), url('/images/cozyRoom.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-5xl mx-auto animate-fade-in-up animation-delay-200">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 p-6 lg:p-8">
            {/* Mobile form */}
            <form className="space-y-4 lg:hidden" onSubmit={onSubmit}>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  value={searchParams.location}
                  onChange={updateField('location')}
                  type="text"
                  placeholder="City, neighborhood, or address"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Room Type</label>
                <select
                  value={searchParams.roomType}
                  onChange={updateField('roomType')}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                >
                  <option value="">Any type</option>
                  <option value="private">Private Room</option>
                  <option value="shared">Shared Room</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Budget</label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    value={searchParams.minPrice}
                    onChange={updateField('minPrice')}
                    type="number"
                    placeholder="Min €"
                    className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                  <input
                    value={searchParams.maxPrice}
                    onChange={updateField('maxPrice')}
                    type="number"
                    placeholder="Max €"
                    className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Move-in Date</label>
                <input
                  value={searchParams.moveInDate}
                  onChange={updateField('moveInDate')}
                  type="date"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg transform transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Search Rooms
              </button>
            </form>

            {/* Desktop form */}
            <form className="hidden lg:block" onSubmit={onSubmit}>
              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-1">
                  <label className="block text-xs font-medium text-gray-700 mb-1">Location</label>
                  <div className="relative">
                    <input
                      value={searchParams.location}
                      onChange={updateField('location')}
                      type="text"
                      placeholder="Where?"
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Room Type</label>
                  <select
                    value={searchParams.roomType}
                    onChange={updateField('roomType')}
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                  >
                    <option value="">Any type</option>
                    <option value="private">Private</option>
                    <option value="shared">Shared</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Budget (€/month)</label>
                  <div className="flex gap-2">
                    <input
                      value={searchParams.minPrice}
                      onChange={updateField('minPrice')}
                      type="number"
                      placeholder="Min"
                      className="w-1/2 px-2 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                    />
                    <input
                      value={searchParams.maxPrice}
                      onChange={updateField('maxPrice')}
                      type="number"
                      placeholder="Max"
                      className="w-1/2 px-2 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Move-in</label>
                  <input
                    value={searchParams.moveInDate}
                    onChange={updateField('moveInDate')}
                    type="date"
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm"
                  />
                </div>

                <div className="flex items-end">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transform transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                  </button>
                </div>
              </div>

              <button type="button" className="mt-4 text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-2 transition-colors cursor-pointer">
                <span>Show advanced filters</span>
              </button>
            </form>
          </div>

          {/* Quick filters */}
          <div className="mt-8">
            <h3 className="font-semibold text-white text-center mb-4 px-4">Popular Amenities</h3>
            <div
              className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 lg:flex-wrap lg:justify-center lg:overflow-x-visible lg:pb-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {quickFilters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => applyQuickFilter(f)}
                  className={
                    'cursor-pointer flex-shrink-0 lg:flex-shrink px-4 py-2 rounded-full border text-sm font-medium transition-all hover:scale-105 ' +
                    (isFilterActive(f)
                      ? 'bg-indigo-50 border-indigo-400 text-indigo-700'
                      : 'bg-white/80 backdrop-blur-lg border-gray-200 text-gray-700 hover:border-indigo-400 hover:text-indigo-600')
                  }
                  aria-pressed={isFilterActive(f)}
                >
                  <span className="mr-1">{f.icon}</span> {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
