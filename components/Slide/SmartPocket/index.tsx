import { FC } from "react";
import Image from "next/image";
import { Slide } from "@/components/Layout/Slide";
import { Code, Theme } from "@radix-ui/themes";
import { Board } from "@/components/Layout/Board";
import { MdOutlineDesignServices } from "react-icons/md";
import { FiDatabase } from "react-icons/fi";
import { FaEthereum } from "react-icons/fa";
import { BoardInner } from "@/components/Layout/BoardInner";
import { CardLayout } from "@/components/Layout/CardLayout";

const data_3 = [
  {
    icon: <MdOutlineDesignServices size={100} color="#FF9900" />,
    title: "Design",
    text: "デザインカンプを元に、コーディングを行います。",
  },
  {
    icon: <FiDatabase size={100} color="#009900" />,
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
    title: "Description",
    text: "特定のNFTを所持する人に向けたポイントサイトの保守・運用を行っています。",
  },
  {
    src: "/sources/cat.svg",
    title: "Tech",
    content: (
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
          <BoardInner key="slide1">
            <div className="flex justify-between">
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
          </BoardInner>,

          <BoardInner key="slide2">
            <div className="flex justify-between">
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
          </BoardInner>,
          <BoardInner key="slide3">
            <CardLayout data={data_3} />
          </BoardInner>,
          <BoardInner key="slide4">
            <CardLayout data={data_4} />
          </BoardInner>,
        ]}
      />
    </Board>
  );
};
