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
          <div className="flex">
            <div className="relative w-[75%] aspect-[8/5] rounded-2xl border-2">
              <Image
                src="/sources/ds_01.png"
                alt=""
                fill
                style={{ objectFit: "contain", borderRadius: "16px" }}
              />
            </div>

            <div className="w-[25%] p-5">
              <p>ホームページです。</p>
              <p className="mt-5">
                一日のスケジュールが円グラフによって直感的にわかりやすく表現されています。
              </p>
              <p className="mt-5">
                タグ、いいね、コメントの機能があり、ユーザー同士の交流が生まれやすい設計になっています。
              </p>
            </div>
          </div>
        </Board>,
        <Board key="slide2">
          <div className="flex">
            <div className="relative w-[75%] aspect-[8/5] rounded-2xl border-2">
              <Image
                src="/sources/ds_02.png"
                alt=""
                fill
                style={{ objectFit: "contain", borderRadius: "16px" }}
              />
            </div>

            <div className="w-[25%] p-5">
              <p>マイページです。</p>
              <p className="mt-5">
                SNSによくある、
                <ul className="my-5">
                  <li>名前,id,プロフメッセージの修正</li>
                  <li>本人投稿の取得</li>
                </ul>
                を行えます。
              </p>
            </div>
          </div>
        </Board>,
        <Board key="slide3">
          {/* 3つ目のスライドの内容 */}
          {/* <div className="grid grid-cols-2 place-items-center h-full"> */}
          <div className="flex">
            <div className="relative w-[75%] aspect-[8/5] rounded-2xl border-2">
              <Image
                src="/sources/ds_03.png"
                alt=""
                fill
                style={{ objectFit: "contain", borderRadius: "16px" }}
              />
            </div>
            <div className="w-[25%] p-5">
              <p>ポスト画面です。</p>
              <p className="mt-5">
                入力されていない時間帯は灰色で染まるようになっています。
              </p>
              <p className="mt-5">
                スペースで区切ることで、簡単に複数のタグを設定できます。
              </p>
            </div>
          </div>
        </Board>,
        <Board key="slide4">
          <div className="flex">
            <div className="relative w-[75%] aspect-[8/5] rounded-2xl border-2">
              <Image
                src="/sources/ds_04.png"
                alt=""
                fill
                style={{ objectFit: "contain", borderRadius: "16px" }}
              />
            </div>
            <div className="w-[25%] p-5">
              <p>検索結果です。</p>
              <p className="mt-5">ワード、タグによる検索を行えます。</p>
              <p className="mt-5">
                ユーザーがいち早く知りたい情報にたどり着くために欠かせない機能です。
              </p>
            </div>
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
