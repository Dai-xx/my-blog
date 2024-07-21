import * as Dialog from "@radix-ui/react-dialog";
import { SmartPocket } from "../Slide/SmartPocket";
import { Dayshare } from "../Slide/Dayshare";
import { LECBLO } from "../Slide/LECBLO";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { Button } from "@radix-ui/themes";
import { FaLink } from "react-icons/fa";

const projects = [
  {
    id: "sm",
    compornent: <SmartPocket />,
    src: "/sources/sm_logo.png",
    size: 140,
    link: {
      site: "https://www.smapocke.app/",
    },
  },
  {
    id: "ds",
    compornent: <Dayshare />,
    src: "/sources/ds_logo.png",
    size: 80,
    link: { github: "https://github.com/nanashi060/dayshare" },
  },
  {
    id: "lb",
    compornent: <LECBLO />,
    src: "/sources/lb_logo.png",
    size: 100,
    link: { github: "https://github.com/taisei08/reco_blo" },
    custom: "RECBLO",
  },
];

export const Modal = () => {
  const [selected, setSelected] = useState("");
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="mx-auto grid grid-cols-2 gap-5">
          {projects.map((project) => (
            <div key={project.id}>
              <button
                key={project.id}
                className={`h-28 w-40 rounded-xl bg-white/60 shadow-lg transition-transform hover:-translate-y-[2px] hover:shadow-xl`}
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
              {project.link && (
                <div className="mt-2">
                  <div className="flex flex-wrap gap-1">
                    {project.link.site && (
                      <Button size="1" variant="solid" color="cyan">
                        <Link
                          href={project.link.site}
                          className="flex items-center gap-1"
                          target="_blank"
                        >
                          <FaLink />
                          <a className="">Site</a>
                        </Link>
                      </Button>
                    )}
                    {project.link.github && (
                      <Button size="1" variant="solid" color="gray">
                        <Link
                          href={project.link.github}
                          className="flex items-center gap-1"
                        >
                          <IoLogoGithub />
                          <a className="">Github</a>
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/50" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium"></Dialog.Title>
          {projects.map((project) => (
            <div key={project.id}>
              {selected === project.id && project.compornent}
            </div>
          ))}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
