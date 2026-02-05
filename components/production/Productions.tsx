'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Productions() {
  const items = [
    { image: '/prod-1.jpg' },
    { image: '/prod-2.jpg' },
    { image: '/prod-3.jpg' },
    { image: '/prod-4.jpg' },
    { image: '/prod-5.jpg' },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Nos productions
        </h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1.4}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4.5 },
          }}
          className="pb-12"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative group rounded-2xl overflow-hidden shadow-md">
                <img
                  src={item.image}
                  alt="Production"
                  className="w-full h-[420px] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    ▶
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
          >
            Découvrir notre portfolio →
          </a>
        </div>
      </div>
    </section>
  );
}
