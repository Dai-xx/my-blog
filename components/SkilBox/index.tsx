import Image from "next/image";

type Props = {
  data: string[];
  text: string;
};

export const SkilBox = ({ data, text }: Props) => {
  return (
    <div className="flex">
      <section className="rounded-l-xl bg-white/50 p-2">
        <div className="grid grid-cols-3 gap-1">
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
      <div className="rounded-r-xl border-gray-300 bg-white p-2">
        <p>{text}</p>
      </div>
    </div>
  );
};
