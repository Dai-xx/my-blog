import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { SmartPocket } from "../Slide/SmartPocket";

const projects = [
  {
    id: "sm",
    title: <SmartPocket />,
    src: "/sources/sm_logo.png",
    color: "#f0f0f0",
    size: 140,
  },
  {
    id: "ds",
    title: <Dayshar />,
    src: "/sources/ds_logo.png",
    color: "",
    size: 80,
  },
  {
    id: "lb",
    title: <LECBLO />,
    src: "/sources/lb_logo.png",
    color: "",
    size: 100,
  },
];

export const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <div className="grid grid-cols-3 place-items-center">
        {projects.map((project) => (
          <div key={project.id}>
            <button
              className={`bg-[${project.color}] h-28 w-40 rounded-xl border-2 border-gray-300`}
              onClick={() => setSelected(project.id)}
            >
              <div className="flex justify-center">
                <Image
                  src={project.src}
                  height={project.size}
                  width={project.size}
                  alt="Smart Pocket"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </button>
          </div>
        ))}
      </div>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
          Edit profile
        </Dialog.Title>
        <Dialog.Description className="text-mauve11 mb-5 mt-[10px] text-[15px] leading-normal">
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label
            className="text-violet11 w-[90px] text-right text-[15px]"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="name"
            defaultValue="Pedro Duarte"
          />
        </fieldset>
        <fieldset className="mb-[15px] flex items-center gap-5">
          <label
            className="text-violet11 w-[90px] text-right text-[15px]"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="username"
            defaultValue="@peduarte"
          />
        </fieldset>
        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
              Save changes
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
