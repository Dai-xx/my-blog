import { FC } from "react";
import Image from "next/image";
import { Slide } from "@/components/Layout/Slide";
import { Blockquote, Box, Card, Code, Theme } from "@radix-ui/themes";
import Link from "next/link";
import { Board } from "@/components/Layout/Board";
import { MdOutlineDesignServices } from "react-icons/md";
import { FiDatabase } from "react-icons/fi";
import { FaEthereum } from "react-icons/fa";

const data = [
  {
    icon: <MdOutlineDesignServices size={100} color="#FF9900" />,
    title: "Design",
    text: "デザインカンプを元に、コーディングを行います。",
  },
  {
    icon: <FiDatabase size={100} color="#0099FF" />,
    title: "Database",
    text: "Firestoreを使用して、データベース情報を取得します。",
  },
  {
    icon: <FaEthereum size={100} color="#0099FF" />,
    title: "Blockchain",
    text: "お客様のブロックチェーン情報を取得し、自動でデータを更新します。",
  },
];

const data_tech = [
  "Next.js",
  "React",
  "Typescript",
  "Firebase",
  "Vercel",
  "web3auth",
  "alchemy",
];

const data_4 = [
  {
    src: "/sources/join.svg",
    title: "Join",
    text: " 開発を請け負っていた先輩のもとで、約1年間インターンをしています。",
  },
  {
    src: "/sources/responsive.svg",
    title: "Design",
    text: "特定のNFTを所持する人に向けたポイントサイトの保守・運用を行っています。",
  },
  {
    src: "/sources/cat.svg",
    title: "Tech",
    text: (
      <div className="flex flex-wrap gap-1">
        {data_tech.map((item: string, index) => (
          <Code key={index}>{item}</Code>
        ))}
      </div>
    ),
  },
];

export const SmartPocket: FC = () => {
  return (
    <Board>
      <Slide
        slides={[
          <div key="slide1">
            <div className="flex justify-between">
              {/* 1つ目のスライドの内容 */}

              {/* <div className="flex h-full flex-col justify-start">
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
              </div> */}
              <div className="relative h-[469px] w-[300px] rounded-t-xl border-x-2 border-t-2">
                <Image
                  src="/sources/sm_01.jpg"
                  alt=""
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "16px",
                  }}
                />
              </div>
              <div className="relative h-[469px] w-[300px] rounded-t-xl border-x border-t">
                <Image
                  src="/sources/sm_02.png"
                  alt=""
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "16px",
                  }}
                />
              </div>
            </div>
          </div>,
          <div key="slide2">
            {/* 2つ目のスライドの内容 */}
            <div className="flex justify-between">
              {/* <div className="flex h-full flex-col justify-start">
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
                  </div> */}
              <div className="relative h-[469px] w-[300px] rounded-t-xl border-x-2 border-t-2">
                <Image
                  src="/sources/sm_03.png"
                  alt=""
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "16px",
                  }}
                />
              </div>
              <div className="relative h-[469px] w-[300px] rounded-t-xl border-x border-t">
                <Image
                  src="/sources/sm_04.png"
                  alt=""
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "top",
                    borderRadius: "16px",
                  }}
                />
              </div>
            </div>
          </div>,
          <div key="slide3">
            {/* 3つ目のスライドの内容 */}
            {/* <div className="flex gap-1">
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
                </div> */}
            <Theme>
              <div className="grid h-[469px] w-[669px] grid-cols-2 grid-rows-2 gap-4 rounded-lg p-2">
                {data.map((item, index) => (
                  <section
                    key={index}
                    className="flex h-full w-full flex-col items-center rounded-xl border-2 border-gray-300 p-2 shadow-lg"
                  >
                    {item.icon}
                    <p className="text-center text-3xl font-extrabold">
                      {item.title}
                    </p>
                    <p className="mt-3">{item.text}</p>
                  </section>
                ))}
              </div>
            </Theme>
          </div>,
          <div key="slide4">
            <Theme>
              <div className="grid h-[469px] w-[669px] grid-cols-2 grid-rows-2 gap-4 rounded-lg p-2">
                {data_4.map((item, index) => (
                  <section
                    key={index}
                    className="flex h-full w-full flex-col items-center rounded-xl border-2 border-gray-300 p-2 shadow-lg"
                  >
                    <div className="relative flex aspect-square w-[100px] items-center justify-center">
                      <Image
                        src={item.src}
                        alt=""
                        height={100}
                        width={100}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <p className="text-center text-3xl font-extrabold">
                      {item.title}
                    </p>
                    <p className="mt-3">{item.text}</p>
                  </section>
                ))}
              </div>
            </Theme>
          </div>,
        ]}
      />
    </Board>
  );
};
