import { FC } from "react";
import Image from "next/image";
import { Slide } from "@/components/Layout/Slide";
import { Board } from "@/components/Layout/Board";

export const SmartPocket: FC = () => {
  return (
    <Slide
      slides={[
        <Board key="slide1">
          {/* 1つ目のスライドの内容 */}
          <div className="relative w-[150px] aspect-[390/844]">
            <Image
              src="/sources/sm_01.png"
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </Board>,
        <Board key="slide2">
          {/* 2つ目のスライドの内容 */}
          <div>Content for slide 2</div>
        </Board>,
        <Board key="slide3">
          {/* 3つ目のスライドの内容 */}
          <div>Content for slide 3</div>
        </Board>,
        <Board key="slide4">
          {/* 4つ目のスライドの内容 */}
          <div>Content for slide 4</div>
        </Board>,
      ]}
    />
  );
};
