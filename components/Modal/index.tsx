import React, { useState } from "react";
import Image from "next/image";
import { SmartPocket } from "@/components/Slide/SmartPocket";
import { Dayshare } from "@/components/Slide/Dayshare";
import { LECBLO } from "@/components/Slide/LECBLO";
import { Button, Dialog, Flex } from "@radix-ui/themes";

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
    title: <Dayshare />,
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

export const Modal = () => {
  const [selected, setSelected] = useState("");

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="grid w-[350px] grid-cols-2 gap-5">
          {projects.map((project) => (
            <button
              key={project.id}
              className={`h-28 w-40 rounded-xl bg-white`}
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
          ))}
        </div>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="700px">
        <Dialog.Title></Dialog.Title>
        <Dialog.Description size="2" mb="4"></Dialog.Description>

        {projects.map((project) => (
          <div key={project.id}>{selected === project.id && project.title}</div>
        ))}

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};