import { FC } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Board } from "../Board";

type Prop = {};

export const Slide: FC<Prop> = ({}) => {
  const swiper = useSwiper();
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={100}
      slidesPerView={3}
      loop
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Board>a</Board>
      </SwiperSlide>
      <SwiperSlide>
        <Board>b</Board>
      </SwiperSlide>
      <SwiperSlide>
        <Board>c</Board>
      </SwiperSlide>
      <SwiperSlide>
        <Board>d</Board>
      </SwiperSlide>
    </Swiper>
  );
};
