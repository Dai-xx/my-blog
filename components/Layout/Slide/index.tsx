import { FC, ReactNode, useState } from "react";
import { A11y, Pagination } from "swiper/modules";
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
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          grabCursor={true}
          centeredSlides={true}
          loop
          pagination={{ clickable: true }}
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
        {swiper && (
          <div className="absolute top-0 z-10 flex h-[469px] w-full items-center justify-between gap-5">
            <button
              className="flex size-16 items-center justify-center rounded-full bg-black/10 hover:bg-black/30"
              onClick={() => swiper.slidePrev()}
            >
              <TbPlayerTrackPrevFilled
                size={35}
                className="text-black/10 hover:text-black/30"
              />
            </button>
            <button
              className="flex size-16 items-center justify-center rounded-full bg-black/10 hover:bg-black/30"
              onClick={() => swiper.slideNext()}
            >
              <TbPlayerTrackNextFilled
                size={35}
                className="text-black/10 hover:text-black/30"
              />
            </button>
          </div>
        )}
      </div>
    </>
  );
};
