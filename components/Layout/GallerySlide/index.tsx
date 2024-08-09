import { FC, ReactNode } from "react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css/navigation";

type SlideProps = {
  slides: ReactNode[]; // スライドに表示するコンポーネントの配列
};

export const GallerySlide: FC<SlideProps> = ({ slides }) => {
  return (
    <div className="h-[370px] w-[370px] rounded-2xl bg-white">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        grabCursor={true}
        centeredSlides={true}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{ height: "100%", borderRadius: "16px" }}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide
            key={index}
            style={{ height: "100%", borderRadius: "16px" }}
          >
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
