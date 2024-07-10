import { FC } from "react";
import Image from "next/image";
import { Slide } from "@/components/Layout/Slide";
import { Board } from "@/components/Layout/Board";
import Link from "next/link";

export const Dayshare: FC = () => {
  return (
    <Slide
      slides={[
        <Board key="slide1">
          {/* 1つ目のスライドの内容 */}
          {/* <div className="grid grid-cols-[1fr_auto] h-full"> */}

          <div className="relative w-[75%] aspect-[8/5] rounded-2xl border-2">
            <Image
              src="/sources/ds_01.png"
              alt=""
              fill
              style={{ objectFit: "contain", borderRadius: "16px" }}
            />
          </div>

          {/* <div className="flex flex-col justify-start h-full">
              <div className="flex gap-3">
                <div className="bg-gradient-to-b from-cyan-500 to-blue-500 w-2 h-full"></div>
                <p className="text-3xl p-2 text-center font-medium">
                  デザインの実装・修正
                </p>
              </div>
              <p className="mt-5">
                デザインカンプを元に、コーディングを行います。
              </p>
              <p className="mt-5">
                月２のペースでデザイナーと通話でデザイン修正会を行います。
              </p>
              <p className="mt-5">
                Tailwindcss, radix-ui, react-spring
                などモダンなデザインライブラリを使用しています。
              </p>
            </div>
          </div> */}
        </Board>,
        <Board key="slide2">
          {/* 2つ目のスライドの内容 */}
          {/* <div className="grid grid-cols-2 place-items-center h-full"> */}
          <div className="relative w-[75%] aspect-[8/5] rounded-2xl border-2">
            <Image
              src="/sources/ds_02.png"
              alt=""
              fill
              style={{ objectFit: "contain", borderRadius: "16px" }}
            />
          </div>
          {/* <div className="flex flex-col justify-start h-full">
              <div className="flex gap-3">
                <div className="bg-gradient-to-b from-cyan-500 to-blue-500 w-2 h-full"></div>
                <p className="text-3xl p-2 text-center font-medium">
                  BC情報の連携
                </p>
              </div>
              <p className="mt-5">
                お客様のブロックチェーン情報を取得し、自動でデータを更新します。
              </p>
              <p className="mt-5">alchemyのapiを使用しています。</p>
              <p className="mt-5">
                スマコン開発経験があり、ブロックチェーンの基礎的な知識があります。
              </p>
            </div>
          </div> */}
        </Board>,
        <Board key="slide3">
          {/* 3つ目のスライドの内容 */}
          {/* <div className="grid grid-cols-2 place-items-center h-full"> */}
          <div className="relative w-[75%] aspect-[8/5] rounded-2xl border-2">
            <Image
              src="/sources/ds_03.png"
              alt=""
              fill
              style={{ objectFit: "contain", borderRadius: "16px" }}
            />
          </div>
          {/* <div className="flex flex-col justify-start h-full">
              <div className="flex gap-3">
                <div className="bg-gradient-to-b from-cyan-500 to-blue-500 w-2 h-full"></div>
                <p className="text-3xl p-2 text-center font-medium">
                  DB情報の連携
                </p>
              </div>
              <p className="mt-5">
                コラボプロジェクトのデータベース情報を取得し、自動でデータを更新します。
              </p>
              <p className="mt-5">Firebaseを使用しています。</p>
              <p className="mt-5">Next.js上でapiの実装を行っています。</p>
            </div>
          </div> */}
        </Board>,
        <Board key="slide4">
          <div className="relative w-[75%] aspect-[8/5] rounded-2xl border-2">
            <Image
              src="/sources/ds_04.png"
              alt=""
              fill
              style={{ objectFit: "contain", borderRadius: "16px" }}
            />
          </div>
        </Board>,
        <Board key="slide5">
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
                ハッカソンに参加した際に開発したプロダクトです。４人でチームを組み、私はフロントエンドを担当しました。
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
                一日のスケジュールを共有できるSNSアプリです。
                志望校の学生や興味のなる職種の人が、実際にどんな一日を過ごしているのかを知りたいというニーズに応えます。
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
                技術スタックは、Next.js, React, Typescript, Firebase, Vercel,
                NextAuth。
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
