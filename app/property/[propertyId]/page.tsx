import PropertySlider from '@/modules/listing/components/PropertySlider'
import { Listing } from '@/types/listings'

type PageProps = {
  params: { propertyId: string }
}

export default async function Page({ params }: PageProps) {
  const { propertyId } = await params
  const res = await fetch(`${process.env.BACKEND_URL}/api/content/property/${propertyId}`)

  if (!res.ok) {
    throw new Error('Failed to load listing')
  }

  const data: Listing = await res.json()

  // Ensure we pass a clean string[] to the slider
  const images: string[] = Array.isArray(data.images) ? data.images.filter((src): src is string => typeof src === 'string' && src.length > 0) : []

  return (
    <div>
      <PropertySlider images={images} />
    </div>
  )
}
