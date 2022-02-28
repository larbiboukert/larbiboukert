import React from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";

type Props = {};

function Posts({}: Props) {
  return (
    <Tab.Group>
      <Tab.List className="mt-10 border-t text-center space-x-8">
        {["PROJECTS"].map((tab, k) => (
          <Tab
            key={k}
            className={({ selected }) =>
              selected ? "py-3 px-1.5 border-t border-black" : "py-3 px-1.5 "
            }
          >
            {tab}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="px-4">
        <Tab.Panel>
          <PostsGridPanel />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default Posts;

const PostsGridPanel = () => (
  <div className="grid gap-7 grid-cols-3">
    {Array.from({ length: 11 }).map((post, k) => (
      <div key={k} className="w-50 aspect-square relative">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="absolute w-full h-full z-10
            bg-black/30 opacity-0 hover:opacity-100
            flex justify-center items-center"
        >
          <Image src={`/icons/link.png`} width={24} height={24} alt="link" />
          <p className="ml-2 text-white font-semibold">Visit</p>
        </a>
        <Image src={`/larbi-boukert-photo.jpeg`} layout="fill" alt="post" />
      </div>
    ))}
  </div>
);
