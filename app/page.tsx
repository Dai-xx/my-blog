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
import { Avatar, Theme } from "@radix-ui/themes";

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

  return (
    <Theme accentColor="blue">
      <main className="h-screen w-full pt-5">
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
          <div className="grid grid-cols-2 grid-rows-2 place-items-start">
            <div className="">
              <Modal />
            </div>
            <div className="">
              <NFT />
            </div>
            <div>
              <Avatar src="/Logos/ts-logo-128.png" fallback="A" />
              <Avatar
                src="/Logos/solidity.svg"
                fallback="A"
                className="bg-white"
              />
              <Avatar
                src="/Logos/Go-Logo.png"
                fallback="A"
                className="bg-white"
              />
              <Avatar src="/Logos/c.png" fallback="A" className="bg-white" />
              <Avatar
                src="/Logos/react-logo.svg"
                fallback="A"
                className="bg-white"
              />
            </div>
          </div>
        </div>
      </main>
    </Theme>
  );
}
