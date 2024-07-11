import { FC, ReactNode } from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type SlideProps = {
  slides: ReactNode[]; // スライドに表示するコンポーネントの配列
};

export const Slide: FC<SlideProps> = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      grabCursor={true}
      centeredSlides={true}
      loop
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {slides.map((slideContent, index) => (
        <SwiperSlide key={index}>{slideContent}</SwiperSlide>
      ))}
    </Swiper>
  );
};
