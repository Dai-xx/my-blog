"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

import "swiper/css/bundle";
import { Slide } from "@/components/Slide";
import Loading from "./loading";

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
      <motion.div
        style={{ opacity }}
        className="h-20 w-full bg-slate-300/70 fixed top-0 z-50"
      ></motion.div>

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
            <h1
              className="text-[280px] font-semibold absolute bottom-10"
              style={{}}
            >
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
      <div className="mt-[100vh] mb-12">
        <div className="bg-white z-10 relative pb-20">
          <section className="pt-20">
            <div>
              <div className="flex mx-12 gap-5">
                <div className="border-l-[10px] border-gray-400"></div>
                <h2 className="text-4xl font-semibold text-black/80">
                  <Typewriter
                    words={["Smart Pocket"]}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h2>
              </div>
              <div className="mt-4">
                <Slide />
              </div>
            </div>
          </section>

          <section className="pt-20">
            <div>
              <div className="flex mx-12 gap-5">
                <div className="border-l-[10px] border-gray-400"></div>
                <h2 className="text-4xl font-semibold text-black/80">
                  <Typewriter
                    words={["Dayshare"]}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h2>
              </div>
              <div className="mt-4">
                <Slide />
              </div>
            </div>
          </section>

          <section className="pt-20">
            <div>
              <div className="flex mx-12 gap-5">
                <div className="border-l-[10px] border-gray-400"></div>
                <h2 className="text-4xl font-semibold text-black/80">
                  <Typewriter
                    words={["Others"]}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h2>
              </div>
              <div className="mt-4">
                <Slide />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
