import { FC } from "react";
import Image from "next/image";
import { Slide } from "@/components/Layout/Slide";
import { Board } from "@/components/Layout/Board";
import Link from "next/link";
import { BoardInner } from "@/components/Layout/BoardInner";
import { BsPieChartFill } from "react-icons/bs";
import { CardLayout } from "@/components/Layout/CardLayout";
import { Code, Theme } from "@radix-ui/themes";
import { FaHashtag } from "react-icons/fa";
import { MdComment } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const feature_data = [
  {
    icon: <BsPieChartFill size={100} color="#CC99FF" />,
    title: "Pie Chart",
    text: "円グラフにより一日のスケジュールを直感的に把握できます。",
  },
  {
    icon: <FaHashtag size={100} color="#0099FF" />,
    title: "Tag",
    text: "自由なタグを設定でき、ユーザーのサーチがしやすい設計になっています。",
  },
  {
    icon: <MdComment size={100} color="#FF9900" />,
    title: "Comment",
    text: "コメントやいいね機能があり、ユーザー同士の交流が生まれやすい設計になっています。",
  },
  {
    icon: <CgProfile size={100} color="gray" />,
    title: "Profile",
    text: "プロフィールページには、ユーザーの情報を編集できる機能があります。",
  },
];

const teches = [
  "Next.js",
  "React",
  "Typescript",
  "Firebase",
  "NextAuth",
  "Vercel",
];

const data_tech = [
  {
    src: "/sources/join.svg",
    title: "Join",
    text: "4人チームでハッカソンに参加した時のプロダクトです。",
  },
  {
    src: "/sources/responsive.svg",
    title: "Description",
    text: "一日のスケジュールを共有できるSNSアプリです。",
  },
  {
    src: "/sources/question.svg",
    title: "Why",
    text: "リアルなスケジュールを知ることは、就職、進学など次のステップを決めるためのヒントになります。",
  },
  {
    src: "/sources/cat.svg",
    title: "Tech",
    content: (
      <div className="flex flex-wrap gap-1">
        {teches.map((item: string, index) => (
          <Code key={index}>{item}</Code>
        ))}
      </div>
    ),
  },
];

export const Dayshare: FC = () => {
  return (
    <Board>
      <Slide
        slides={[
          <BoardInner key="slide1">
            <div className="h-full">
              <div className="relative h-full w-full rounded-2xl border-2">
                <Image
                  src="/sources/ds_01.png"
                  alt=""
                  fill
                  style={{ objectFit: "contain", borderRadius: "16px" }}
                />
              </div>
            </div>
          </BoardInner>,
          <BoardInner key="slide2">
            <div className="flex h-full items-center">
              <div className="relative h-full w-full rounded-2xl border-2">
                <Image
                  src="/sources/ds_02.png"
                  alt=""
                  fill
                  style={{ objectFit: "contain", borderRadius: "16px" }}
                />
              </div>
            </div>
          </BoardInner>,
          <BoardInner key="slide3">
            <div className="flex h-full items-center">
              <div className="relative h-full w-full rounded-2xl border-2">
                <Image
                  src="/sources/ds_03.png"
                  alt=""
                  fill
                  style={{ objectFit: "contain", borderRadius: "16px" }}
                />
              </div>
            </div>
          </BoardInner>,

          <BoardInner key="slide4">
            <CardLayout data={feature_data} />
          </BoardInner>,
          <BoardInner key="slide5">
            <CardLayout data={data_tech} />
          </BoardInner>,
        ]}
      />
    </Board>
  );
};
