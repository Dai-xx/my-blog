import { FC } from "react";
import Image from "next/image";
import { Slide } from "@/components/Layout/Slide";
import { Board } from "@/components/Layout/Board";
import Link from "next/link";
import { BoardInner } from "@/components/Layout/BoardInner";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { Button, Code, Theme } from "@radix-ui/themes";
import { CardLayout } from "@/components/Layout/CardLayout";
import { MdCloudUpload, MdComment } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";

const feature_data = [
  {
    icon: <MdCloudUpload size={100} color="#CC99FF" />,
    title: "Upload",
    text: "mp3ファイルをアップロードすることができます。",
  },
  {
    icon: <FaCirclePlay size={100} color="#0099FF" />,
    title: "One Click Play",
    text: "アップロードされた音楽をワンクリックで視聴できます。",
  },
  {
    icon: <MdComment size={100} color="#FF9900" />,
    title: "Comment",
    text: "コメント機能があり、ユーザー同士の交流が生まれやすい設計になっています。",
  },
];

const teches = ["Next.js", "React", "Typescript", "Firebase", "Vercel"];

const data_tech = [
  {
    src: "/sources/join.svg",
    title: "Join",
    text: "4人チームでハッカソンに参加した時のプロダクトです。",
  },
  {
    src: "/sources/responsive.svg",
    title: "Description",
    text: "短い音楽を共有できるサービスです。",
  },
  {
    src: "/sources/hard.svg",
    title: "Situation",
    text: "約10時間というとてもハードな開発でした。　　アイデアと完成度が評価され、優勝できました。",
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

export const LECBLO: FC = () => {
  return (
    <Board>
      <Slide
        slides={[
          <BoardInner key="slide1">
            <div className="h-full">
              <div className="relative h-full w-full rounded-2xl border-2">
                <Image
                  src="/sources/lb_01.png"
                  alt=""
                  fill
                  style={{ objectFit: "contain", borderRadius: "16px" }}
                />
              </div>
            </div>
          </BoardInner>,
          <BoardInner key="slide2">
            <div className="h-full">
              <div className="relative h-full w-full rounded-2xl border-2">
                <Image
                  src="/sources/lb_02.png"
                  alt=""
                  fill
                  style={{ objectFit: "contain", borderRadius: "16px" }}
                />
              </div>
            </div>
          </BoardInner>,
          <BoardInner key="slide3">
            <div className="h-full">
              <div className="relative h-full w-full rounded-2xl">
                <Theme className="relative z-10 mx-5 mt-1">
                  <Button variant="solid">
                    <Link
                      href={
                        "https://www.canva.com/design/DAGKOk31r2k/gbmg70BCkbGx_oh07MaiGw/edit?utm_content=DAGKOk31r2k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                      }
                      target="blank"
                      className="flex items-center gap-2"
                    >
                      Canva
                      <TbPlayerTrackNextFilled />
                    </Link>
                  </Button>
                </Theme>
                <Image
                  src="/sources/lb_03.png"
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
