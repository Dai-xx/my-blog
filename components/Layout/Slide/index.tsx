import { FC, ReactNode, useState } from "react";
import { A11y, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css/navigation";
import { Button } from "@radix-ui/themes";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";

type SlideProps = {
  slides: ReactNode[];
};

export const Slide: FC<SlideProps> = ({ slides }) => {
  const [swiper, setSwiper] = useState(null);
  console.log("swiper_in_parent", swiper);

  return (
    <>
      <div className="relative">
        <Swiper
          modules={[Pagination, A11y, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          grabCursor={true}
          centeredSlides={true}
          loop
          pagination={{ clickable: true }}
          navigation
          onSwiper={(swiper: any) => {
            console.log("initialize swiper", swiper);
            setSwiper(swiper);
          }}
          onSlideChange={() => console.log("slide change")}
          style={{ height: "100%" }}
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide key={index} style={{ height: "100%" }} className="">
              {slideContent}
            </SwiperSlide>
          ))}
        </Swiper>
        {/* {swiper && (
          <div className="absolute top-0 z-10 flex h-[469px] w-full items-center justify-between gap-5">
            <button onClick={() => swiper.slidePrev()}>
              <TbPlayerTrackPrevFilled
                size={60}
                className="rounded-full bg-black/10 p-3 text-black/10 hover:bg-black/30 hover:text-black/30"
              />
            </button>
            <button onClick={() => swiper.slideNext()}>
              <TbPlayerTrackNextFilled
                size={60}
                className="rounded-full bg-black/10 p-3 text-black/10 hover:bg-black/30 hover:text-black/30"
              />
            </button>
          </div>
        )} */}
      </div>
    </>
  );
};
