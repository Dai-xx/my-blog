"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

import "swiper/css/bundle";
import Loading from "./loading";
import { useInView } from "react-intersection-observer";
import { TypeTitle } from "@/components/TypeTitle";
import { Header } from "@/components/Header";
import { SmartPocket } from "@/components/Slide/SmartPocket";
import { Dayshare } from "@/components/Slide/Dayshare";
import { Others } from "@/components/Slide/Others";

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
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <Loading />
      </div>
    );

  return (
    <main className="">
      {/* <motion.div style={{ opacity }} className="z-50"></motion.div> */}
      <Header />

      <header className="bg-black fixed top-0 w-full h-screen overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
          style={{
            backgroundImage: 'url("/sorces/blue.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            display: "relative",
          }}
        >
          {showText && (
            <h1 className="text-[280px] font-semibold absolute bottom-10">
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
      <div className="mt-[100vh] mb-[100px]">
        <div className="bg-white z-10 relative pb-20">
          <section className="pt-20">
            <div>
              <TypeTitle text="Smart Pocket" />
              <div className="mt-4">
                <SmartPocket />
              </div>
            </div>
          </section>

          <section className=" mt-48">
            <div>
              <TypeTitle text="Dayshare" />
              <div className="mt-4">
                <Dayshare />
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
