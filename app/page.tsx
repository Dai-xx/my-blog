"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import { FaTrophy } from "react-icons/fa";

import "swiper/css/bundle";
import Loading from "./loading";
import { useInView } from "react-intersection-observer";
import { TypeTitle } from "@/components/TypeTitle";
import { Header } from "@/components/Header";
import { SmartPocket } from "@/components/Slide/SmartPocket";
import { Dayshare } from "@/components/Slide/Dayshare";
import { Others } from "@/components/Slide/Others";
import { LECBLO } from "@/components/Slide/LECBLO";

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
    <main className="">
      {/* <motion.div style={{ opacity }} className="z-50"></motion.div> */}
      <Header />

      <header className="fixed top-0 h-screen w-full overflow-hidden bg-black">
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
      </header>
      <div className="mb-[100px] mt-[100vh]">
        <div className="relative z-10 bg-white pb-20">
          <section className="pt-20">
            <div>
              <TypeTitle text="Smart Pocket" />
              <div className="mt-4">
                <SmartPocket />
              </div>
            </div>
          </section>

          <section className="mt-48">
            <div>
              <TypeTitle text="Dayshare" />
              <div className="mt-4">
                <Dayshare />
              </div>
            </div>
          </section>

          <section className="mt-48">
            <div>
              <div className="flex">
                <TypeTitle text="LECBLO" />

                <FaTrophy size={40} color="gold" />
              </div>
              <div className="mt-4">
                <LECBLO />
              </div>
            </div>
          </section>

          <section className="pt-48">
            <div>
              <TypeTitle text="Others" />
              <div className="mt-4">
                <Others />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
