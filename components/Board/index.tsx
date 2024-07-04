import { FC } from "react";

type Prop = {
  children: React.ReactNode;
};

export const Board: FC<Prop> = ({ children }) => {
  return (
    <div className="w-full mx-auto aspect-[2/1] rounded-3xl p-1 backdrop-opacity-25 bg-white/20 border border-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="bg-white rounded-[20px] w-full h-full p-5">
        {children}
      </div>
    </div>
  );
};
