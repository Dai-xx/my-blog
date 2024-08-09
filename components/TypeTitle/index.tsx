import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import { Typewriter } from "react-simple-typewriter";

type Prop = {
  text: string;
};

export const TypeTitle: React.FC<Prop> = ({ text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  return (
    <div ref={ref}>
      {inView && (
        <div className="mx-4 flex gap-5 md:mx-12">
          <div className="border-l-[10px] border-gray-400"></div>
          <h2 className="text-2xl font-semibold text-black/80 md:text-4xl">
            <Typewriter
              words={[text]}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
        </div>
      )}
    </div>
  );
};
