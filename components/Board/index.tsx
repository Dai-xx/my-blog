import { FC } from "react";

type Prop = {
  children: React.ReactNode;
};

export const Board: FC<Prop> = ({ children }) => {
  return (
    <div className="w-[600px] h-96 rounded-3xl p-3 bg-gray-700/20 border border-gray-600/40">
      {children}
    </div>
  );
};
