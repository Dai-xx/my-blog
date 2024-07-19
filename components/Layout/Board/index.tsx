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
    // <div
    //   ref={ref}
    //   className={`mx-auto mb-20 aspect-[5/3] w-[700px] transform overflow-hidden rounded-3xl border border-transparent bg-white/20 bg-gradient-to-r from-cyan-500 to-blue-500 p-1 shadow-2xl backdrop-opacity-25 transition-all duration-500 ease-in-out ${
    //     inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    //   }`}
    //   style={{
    //     transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
    //   }}
    // >
    <div className="h-full w-full overflow-hidden rounded-[20px] bg-white px-5 pt-5 shadow-xl">
      {children}
    </div>
    // </div>
  );
};
