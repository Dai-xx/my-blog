import React, { FC } from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";

type Prop = {
  children: React.ReactNode;
};

export const BoardInner: FC<Prop> = ({ children }) => {
  return <div className="h-[469px] w-[669px] p-2">{children}</div>;
};
