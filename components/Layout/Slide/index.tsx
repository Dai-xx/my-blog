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
    <div className="mx-auto h-[400px] w-[600px] rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 p-2">
      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
        <div className="h-[370px] w-[570px] rounded-2xl bg-white">
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
              <SwiperSlide key={index} style={{ height: "100%" }}>
                {slideContent}
              </SwiperSlide>
            ))}
          </Swiper>
          {swiper && (
            <div className="mt-5 flex gap-5">
              <Button
                color="indigo"
                variant="solid"
                onClick={() => swiper.slidePrev()}
              >
                <TbPlayerTrackPrevFilled />
                Prev
              </Button>
              <Button
                color="indigo"
                variant="solid"
                onClick={() => swiper.slideNext()}
                className="flex"
              >
                Next
                <TbPlayerTrackNextFilled />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
