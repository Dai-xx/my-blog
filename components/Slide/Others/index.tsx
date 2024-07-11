import { FC } from "react";
import Image from "next/image";
import { Slide } from "@/components/Layout/Slide";
import { Board } from "@/components/Layout/Board";

export const Others: FC = () => {
  return (
    <>
      <p className="mx-12">趣味で作成したことがある3Dモデリングと写真。</p>
      <Slide
        slides={[
          <div key="slide1">
            {/* 1つ目のスライドの内容 */}

            <div className="relative w-[50%] aspect-[390/844]">
              <Image
                src="/sources/AT-AT01.png"
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>,
          <div key="slide2">
            <div className="relative w-[50%] aspect-[390/844]">
              <Image
                src="/sources/power_house.png"
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>,
          <div key="slide3">
            <div className="relative w-[50%] aspect-[390/844]">
              <Image
                src="/sources/nhao.jpeg"
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>,
          <div key="slide3">
            <div className="relative w-[50%] aspect-[390/844]">
              <Image
                src="/sources/ajisai.JPG"
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>,
        ]}
      />
    </>
  );
};
