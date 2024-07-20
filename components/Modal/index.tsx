const projects = [
  {
    id: "sm",
    compornent: <SmartPocket />,
    src: "/sources/sm_logo.png",
    color: "",
    size: 140,
  },
  {
    id: "ds",
    compornent: <Dayshare />,
    src: "/sources/ds_logo.png",
    color: "",
    size: 80,
  },
  {
    id: "lb",
    compornent: <LECBLO />,
    src: "/sources/lb_logo.png",
    color: "",
    size: 100,
    custom: "RECBLO",
  },
];

import * as Dialog from "@radix-ui/react-dialog";
import { SmartPocket } from "../Slide/SmartPocket";
import { Dayshare } from "../Slide/Dayshare";
import { LECBLO } from "../Slide/LECBLO";
import { useState } from "react";
import Image from "next/image";

export const Modal = () => {
  const [selected, setSelected] = useState("");
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="mx-auto grid w-[350px] grid-cols-2 gap-5">
          {projects.map((project) => (
            <button
              key={project.id}
              className={`${project.color} h-28 w-40 rounded-xl bg-white/60 shadow-lg transition-transform hover:translate-y-1`}
              onClick={() => setSelected(project.id)}
            >
              <div className="flex justify-center">
                {project.custom && (
                  <div className="absolute mt-3 text-2xl font-bold text-white">
                    {project.custom}
                  </div>
                )}
                <Image
                  src={project.src}
                  height={project.size}
                  width={project.size}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </button>
          ))}
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/50" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div className="mx-auto flex h-[500px] w-[700px] items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="h-[485px] w-[685px] overflow-hidden rounded-2xl bg-white p-2">
              {projects.map((project) => (
                <div key={project.id}>
                  {selected === project.id && project.compornent}
                </div>
              ))}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
