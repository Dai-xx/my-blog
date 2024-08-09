import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";

type Prop = {
  children: React.ReactNode;
};

export const Board: React.FC<Prop> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex h-[500px] w-[700px] items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="h-[485px] w-[685px] rounded-2xl bg-white p-2">
        {children}
      </div>
    </div>
  );
};
