import { FC } from "react";
import Image from "next/image";
import { Slide } from "@/components/Layout/Slide";
import { Board } from "@/components/Layout/Board";
import { GallerySlide } from "@/components/Layout/GallerySlide";

export const NFT: FC = () => {
  return (
    <>
      <GallerySlide
        slides={[
          <div key="slide1">
            <div className="relative aspect-square w-full rounded-lg">
              <Image
                src="/NFTs/1866.png"
                alt=""
                fill
                style={{ objectFit: "contain", borderRadius: "16px" }}
              />
            </div>
          </div>,
          <div key="slide2">
            <div className="relative aspect-square w-full rounded-lg">
              <Image
                src="/NFTs/aa.jpg"
                alt=""
                fill
                style={{ objectFit: "contain", borderRadius: "16px" }}
              />
            </div>
          </div>,
          <div key="slide3">
            <div className="relative aspect-square w-full rounded-lg">
              <Image
                src="/NFTs/mirako.jpg"
                alt=""
                fill
                style={{ objectFit: "contain", borderRadius: "16px" }}
              />
            </div>
          </div>,
          <div key="slide3">
            <div className="relative aspect-square w-full rounded-lg">
              <Image
                src="/NFTs/1866.png"
                alt=""
                fill
                style={{ objectFit: "contain", borderRadius: "16px" }}
              />
            </div>
          </div>,
        ]}
      />
    </>
  );
};
