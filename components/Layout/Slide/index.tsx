import { FC, ReactNode } from "react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css/navigation";

type SlideProps = {
  slides: ReactNode[]; // スライドに表示するコンポーネントの配列
};

export const Slide: FC<SlideProps> = ({ slides }) => {
  return (
    <div className="mx-auto h-[500px] w-[700px] rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 p-2">
      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
        <div className="h-[470px] w-[670px] rounded-2xl bg-white">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            grabCursor={true}
            centeredSlides={true}
            loop
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            style={{ height: "100%" }}
          >
            {slides.map((slideContent, index) => (
              <SwiperSlide key={index} style={{ height: "100%" }}>
                {slideContent}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
