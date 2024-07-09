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
          <div className="grid grid-cols-2 place-items-center h-full">
            <div className="relative w-[80%] aspect-[390/844] rounded-2xl border-2">
              <Image
                src="/sources/sm_01.jpg"
                alt=""
                fill
                style={{ objectFit: "contain", borderRadius: "16px" }}
              />
            </div>
            <div className="flex flex-col justify-start h-full">
              <p className="text-3xl">デザインの実装</p>
            </div>
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
