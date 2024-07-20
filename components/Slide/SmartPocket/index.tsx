import { FC } from "react";
import Image from "next/image";
import { Slide } from "@/components/Layout/Slide";
import { Blockquote, Theme } from "@radix-ui/themes";
import Link from "next/link";

export const SmartPocket: FC = () => {
  return (
    <Slide
      slides={[
        <div key="slide1">
          {/* 1つ目のスライドの内容 */}
          <div className="flex gap-1">
            <div className="flex h-full flex-col justify-start">
              <Theme>
                <Blockquote size="8">デザインの実装・修正</Blockquote>
              </Theme>

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
            <div className="rounded-2xl border-2">
              <Image
                src="/sources/sm_01.jpg"
                alt=""
                height={600}
                width={300}
                style={{ objectFit: "contain", borderRadius: "16px" }}
              />
            </div>
          </div>
        </div>,
        <div key="slide2">
          {/* 2つ目のスライドの内容 */}
          <div className="flex gap-1">
            <div className="flex h-full flex-col justify-start">
              <Theme>
                <Blockquote size="8">BC情報の連携</Blockquote>
              </Theme>
              <p className="mt-5">
                お客様のブロックチェーン情報を取得し、自動でデータを更新します。
              </p>
              <p className="mt-5">alchemyのapiを使用しています。</p>
              <p className="mt-5">
                スマコン開発経験があり、ブロックチェーンの基礎的な知識があります。
              </p>
            </div>
            <div className="rounded-2xl border-2">
              <Image
                src="/sources/sm_02.png"
                alt=""
                height={600}
                width={280}
                style={{ objectFit: "contain", borderRadius: "16px" }}
              />
            </div>
          </div>
        </div>,
        <div key="slide3">
          {/* 3つ目のスライドの内容 */}
          <div className="flex gap-1">
            <div className="flex h-full flex-col justify-start">
              <Theme>
                <Blockquote size="8">DB情報の連携</Blockquote>
              </Theme>
              <p className="mt-5">
                コラボプロジェクトのデータベース情報を取得し、自動でデータを更新します。
              </p>
              <p className="mt-5">Firebaseを使用しています。</p>
              <p className="mt-5">Next.js上でapiの実装を行っています。</p>
            </div>
            <div className="rounded-2xl border-2">
              <Image
                src="/sources/sm_03.png"
                alt=""
                height={600}
                width={280}
                style={{ objectFit: "contain", borderRadius: "16px" }}
              />
            </div>
          </div>
        </div>,
        <div key="slide4">
          {/* 4つ目のスライドの内容 */}
          <div className="flex h-full items-center justify-between gap-10">
            <div>
              <div className="relative mx-auto aspect-[511.56264/532.44842] w-[120px]">
                <Image
                  src="/sources/join.svg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <p className="mt-8 text-base">
                開発を請け負っていた先輩のもとで、約１年間インターン
                をしています。
              </p>
            </div>
            <div>
              <div className="relative mx-auto aspect-[511.56264/532.44842] w-[120px]">
                <Image
                  src="/sources/responsive.svg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <p className="mt-8 text-base">
                <Link
                  href={"https://japandao.jp/"}
                  className="border-b border-black hover:border-gray-500 hover:text-gray-500"
                  target="blank"
                >
                  JAPAN DAO
                </Link>
                が発行するNFTを所持する人に向けたポイントサイト『
                <Link
                  href={"https://www.smapocke.app/"}
                  className="border-b border-black hover:border-gray-500 hover:text-gray-500"
                  target="blank"
                >
                  Smart Pocket
                </Link>
                』の保守・運用を行っています。
              </p>
            </div>
            <div>
              <div className="relative mx-auto aspect-[511.56264/532.44842] w-[120px]">
                <Image
                  src="/sources/cat.svg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <p className="mt-8 text-base">
                技術スタックは、Next.js, React, Typescript, Firebase, Vercel,
                web3auth, alchemy。
              </p>
            </div>
            {/*
            <Link
              href={"https://www.smapocke.app/"}
              className="absolute bottom-5 border-b border-black hover:border-gray-500 hover:text-gray-500"
              target="blank"
            >
              Go to Smart Pocket →
            </Link> */}
          </div>
        </div>,
      ]}
    />
  );
};
