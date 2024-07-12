"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex h-[100vh] w-[100vw] items-center bg-black">
      <motion.div
        className="mx-auto h-20 w-20 rounded-xl bg-blue-500"
        animate={{
          scale: [1],
          rotate: [0, 0, 360, 360],
          transition: {
            duration: 1,
            repeat: Infinity,
          },
        }}
      />
    </div>
  );
}
