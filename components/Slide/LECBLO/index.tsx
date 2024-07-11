import { FC } from "react";
import Image from "next/image";
import { Slide } from "@/components/Layout/Slide";
import { Board } from "@/components/Layout/Board";
import Link from "next/link";

export const LECBLO: FC = () => {
  return (
    <Slide
      slides={[
        <Board key="slide1">
          {/* 1つ目のスライドの内容 */}
          {/* <div className="grid grid-cols-[1fr_auto] h-full"> */}
          <div className="flex">
            <div className="relative w-[75%] aspect-[8/5] rounded-2xl border-2">
              <Image
                src="/sources/lb_01.png"
                alt=""
                fill
                style={{ objectFit: "contain", borderRadius: "16px" }}
              />
            </div>

            <div className="w-[25%] p-5">
              <p>ホームページです。</p>
              <p className="mt-5">
                再生ボタンを押すと、ワンクリックで音楽が再生されます。
              </p>
            </div>
          </div>
        </Board>,
        <Board key="slide2">
          <div className="flex">
            <div className="relative w-[75%] aspect-[8/5] rounded-2xl border-2">
              <Image
                src="/sources/lb_02.png"
                alt=""
                fill
                style={{ objectFit: "contain", borderRadius: "16px" }}
              />
            </div>

            <div className="w-[25%] p-5">
              <p>ログイン後に投稿できるようになります。</p>
              <p className="mt-5"></p>
            </div>
          </div>
        </Board>,
        <Board key="slide2">
          <div>
            <Link
              href={
                "https://www.canva.com/design/DAGKOk31r2k/gbmg70BCkbGx_oh07MaiGw/edit?utm_content=DAGKOk31r2k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              }
              target="blank"
              className="border-b border-black hover:border-gray-500 hover:text-gray-500"
            >
              紹介スライド (Canvaへ飛びます)
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="relative w-[75%] aspect-[8/5] rounded-2xl">
              <Image
                src="/sources/lb_03.png"
                alt=""
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </Board>,

        <Board key="slide3">
          {/* 4つ目のスライドの内容 */}
          <div className="flex justify-between gap-10">
            <div>
              <div className="relative aspect-[511.56264/532.44842] w-[120px] mx-auto">
                <Image
                  src="/sources/join.svg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <p className="mt-8 text-base">
                ハッカソンに参加した際に開発したプロダクトです。４人でチームを組み、開発期間は２日のみでした。
              </p>
            </div>
            <div>
              <div className="relative aspect-[511.56264/532.44842] w-[120px] mx-auto">
                <Image
                  src="/sources/responsive.svg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <p className="mt-8 text-base">
                音楽素材を投稿できるサービスです。SNSになっているので、音楽コミュニティを作ることができます。
              </p>
            </div>
            <div>
              <div className="relative aspect-[511.56264/532.44842] w-[120px] mx-auto">
                <Image
                  src="/sources/cat.svg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <p className="mt-8 text-base">
                技術スタックは、Next.js, React, Typescript, Firebase, Vercel, 。
              </p>
            </div>

            <Link
              href={"https://www.smapocke.app/"}
              className="border-b border-black hover:border-gray-500 hover:text-gray-500 bottom-5 absolute"
              target="blank"
            >
              Go to Smart Pocket →
            </Link>
          </div>
        </Board>,
      ]}
    />
  );
};
