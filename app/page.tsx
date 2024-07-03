"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

export default function Home() {
  const [showText, setShowText] = useState(false);
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 2000], [0, 1]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2500); // 2.5秒後に表示

    return () => clearTimeout(timer); // クリーンアップタイマー
  }, []);

  return (
    <main className="">
      <motion.div
        style={{ opacity }}
        className="h-20 w-full bg-slate-300/70 fixed top-0 z-50"
      ></motion.div>

      <header className="bg-black">
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
      <div className="h-[1000px]"></div>
    </main>
  );
}
