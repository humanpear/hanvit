import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { slides } from '@/data/portfolio'

function PortfolioSlider() {
  return (
    <div className="relative">
      <Swiper
        className="portfolio-swiper h-[500px] w-full"
        spaceBetween={12}
        slidesPerView={'auto'}
        loop={true}
        centeredSlides={false}
        speed={7000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
      >
        {slides.map((items, index) => (
          <SwiperSlide key={items.id} className="w-auto!">
            <img
              className="block h-full w-auto max-w-none object-cover"
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
