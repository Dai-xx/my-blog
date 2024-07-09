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
    <div
      ref={ref}
      className={`w-full mx-auto aspect-[2/1] shadow-2xl mb-20 rounded-3xl p-1 backdrop-opacity-25 bg-white/20 border border-transparent bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden transition-all duration-500 ease-in-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
      }}
    >
      <div className="bg-white rounded-[20px] w-full h-full px-5 pt-5 shadow-xl overflow-hidden">
        <div className="h-full w-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
};
