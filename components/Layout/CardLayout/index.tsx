import Image from "next/image";
import { FC } from "react";

type Props = {
  data: {
    src?: string;
    icon?: React.ReactNode;
    title: string;
    content?: React.ReactNode;
    text?: string;
  }[];
};

export const CardLayout: FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 rounded-lg">
      {data.map((item, index) => (
        <section
          key={index}
          className="flex h-full w-full flex-col items-center rounded-lg border-2 border-gray-300 p-2"
        >
          {item.src && (
            <div className="relative flex aspect-square w-[100px] items-center justify-center">
              <Image
                src={item.src}
                alt=""
                height={100}
                width={100}
                style={{ objectFit: "cover" }}
              />
            </div>
          )}

          {item.icon && <>{item.icon}</>}
          <p className="text-center text-3xl font-extrabold">{item.title}</p>
          {item.text && <p className="mt-3">{item.text}</p>}
          {item.content && <>{item.content}</>}
        </section>
      ))}
    </div>
  );
};
