import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const sponsors = [
  "/assets/patro1.png",
  "/assets/patro2.png",
  "/assets/patro3.png",
  // …
];

export default function SponsorsCarousel() {
  return (
    <section id="patrocinadores" className="py-16 bg-white">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-2xl font-bold">Patrocinadores</h2>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop
        autoplay={{ delay: 2500 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="px-8"
      >
        {sponsors.map((src, i) => (
          <SwiperSlide key={i} className="flex items-center justify-center">
            <img src={src} alt={`Sponsor ${i}`} className="h-24 object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
