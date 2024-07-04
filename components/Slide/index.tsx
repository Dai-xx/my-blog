import { FC } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Board } from "../Board";
import Image from "next/image";

type Prop = {};

export const Slide: FC<Prop> = ({}) => {
  // const swiper = useSwiper();

  return (
    <Swiper
      // install Swiper modules
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
      <SwiperSlide>
        <Board>
          <div className="relative ">
            <Image
              src="/sorces/sm_01.png"
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </Board>
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
