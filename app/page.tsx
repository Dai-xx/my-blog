"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import { FaTrophy } from "react-icons/fa";

import "swiper/css/bundle";
import Loading from "./loading";
import { Modal } from "@/components/Modal";
import "@radix-ui/themes/styles.css";
import { GallerySlide } from "@/components/Layout/GallerySlide";
import { NFT } from "@/components/Slide/NFT";
import "@radix-ui/themes/styles.css";
import { Avatar, Card, Inset, Text, Theme } from "@radix-ui/themes";
import Image from "next/image";
import { SkilBox } from "@/components/SkilBox";

export default function Home() {
  const [showText, setShowText] = useState(false);
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 2000], [0, 1]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1500); // 2.5秒後に表示

    return () => clearTimeout(timer); // クリーンアップタイマー
  }, []);

  if (!showText)
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">
        <Loading />
      </div>
    );

  const data = [
    "/Logos/solidity.svg",
    "/Logos/Go-Logo.png",
    "/Logos/c.png",
    "/Logos/Hardhat.png",
  ];

  const front = [
    "/Logos/ts-logo-128.png",
    "/Logos/react.svg",
    "/Logos/nextjs.png",
    "/Logos/html.png",
    "/Logos/tailwindcss.png",
    "/Logos/firebase.png",
  ];

  const blockchain = ["/Logos/solidity.svg", "/Logos/Hardhat.png"];

  const univ = ["/Logos/c.png", "/Logos/r.png"];

  return (
    <Theme accentColor="blue">
      <main className="h-screen w-full bg-gradient-to-r from-[#e0eaf3] to-[#cfdef3] pt-5">
        {/* <Header /> */}

        {/* <header className="fixed top-0 h-screen w-full overflow-hidden">
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 8 }}
        style={{
          backgroundImage: 'url("/sources/blue.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "relative",
          }}
          >
          {showText && (
            <h1 className="absolute bottom-1/2 text-[100px] font-extrabold md:bottom-10 md:text-[280px] md:font-semibold">
            <Typewriter
            words={["Hello", "Hello, world!"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            />
            </h1>
            )}
            </motion.div>
            </header> */}

        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-2 grid-rows-2 place-items-start gap-5">
            <div className="grade-bg rounded-2xl p-5">
              <Modal />
            </div>
            <div className="mx-auto">
              <NFT />
            </div>
            <div className="flex h-full items-center">
              <div>
                <SkilBox data={front}>
                  使用頻度が高い技術スタックです。
                  <br />
                  フルスタックで開発しています。
                </SkilBox>
                <div className="mt-2"></div>
                <SkilBox data={blockchain}>
                  ブロックチェーン関連の技術も触れます。
                </SkilBox>
                <div className="mt-2"></div>
                <SkilBox data={univ}>
                  大学で使用している技術スタックです。
                </SkilBox>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </main>
    </Theme>
  );
}
