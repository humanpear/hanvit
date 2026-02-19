import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { slides } from '@/data/portfolio'

function PortfolioSlider() {
  return (
    <div className="relative">
      <Swiper
        className="h-[500px] w-full"
        spaceBetween={0}
        slidesPerView={'auto'}
        loop={true}
        speed={6000}
        freeMode={true}
        autoplay={{
          delay: 0,
        }}
        modules={[Autoplay]}
      >
        {slides.map((items, index) => (
          <SwiperSlide key={items.id} className="w-auto! p-3">
            <img
              className="block h-full w-auto max-w-none object-cover hover:scale-105 overflow-visible transition-all cursor-pointer"
              src={items.imageUrl}
              alt={`image${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  )
}

export default PortfolioSlider
