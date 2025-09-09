'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import Image from 'next/image';

type Props = { images: string[]; title?: string; className?: string };

export default function PropertySlider({ images, title = 'Property', className = '' }: Props) {
  if (!images?.length) return null;

  return (
    <div className={className}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={12}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className="aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] bg-gray-200"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={`${title} - Image ${index + 1}`}
                fill
                className="object-cover"
                // First slide eager (preloaded), others default to lazy:
                {...(index === 0 ? { priority: true } : {})}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
