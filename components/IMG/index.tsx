import Image from "next/image";
import { FC } from "react";

type Props = {
  src: string;

  className?: string;
};

export const IMG: FC<Props> = ({ src, className }) => {
  return (
    <div className={`${className} relative`}>
      <Image src={src} alt="" fill className={className} />
    </div>
  );
};
