'use server'

import { HomeListingGroup } from '@/types/listings'
import HomeSlider from './HomeSlide'

export default async function HomeContent() {
  try {
    const response = await fetch(process.env.BACKEND_URL + '/api/content/home')

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: HomeListingGroup[] = await response.json()

    return (
      <div className="font-sans max-w-7xl mx-auto">
        {data.map((localitySlider: HomeListingGroup) => (
          <HomeSlider key={localitySlider.localitySlug} listingGroup={localitySlider} />
        ))}
      </div>
    )
  } catch (error) {
    return <div className="font-sans min-h-screen">Error loading content</div>
  }
}
