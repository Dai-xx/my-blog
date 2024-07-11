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
        <div className="flex mx-12 gap-5">
          <div className="border-l-[10px] border-gray-400"></div>
          <h2 className="text-4xl font-semibold text-black/80">
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
