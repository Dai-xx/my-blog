import Image from "next/image";

type Props = {
  data: string[];
  children: React.ReactNode;
};

export const SkilBox = ({ data, children }: Props) => {
  return (
    <div className="flex">
      <section className="flex items-center rounded-l-xl bg-white/50 p-2">
        <div className="grid w-[128px] grid-cols-3 gap-1">
          {data.map((item, index) => {
            return (
              <div className="relative aspect-square w-10" key={index}>
                <Image
                  src={item}
                  fill
                  alt=""
                  style={{ objectFit: "contain" }}
                />
              </div>
            );
          })}
        </div>
      </section>
      <div className="w-[246px] rounded-r-xl border-gray-300 bg-white p-2">
        <p>{children}</p>
      </div>
    </div>
  );
};
