import React from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";

type Props = {};

function Posts({}: Props) {
  return (
    <Tab.Group>
      <Tab.List className="mt-10 border-t text-center space-x-8">
        {Array.from({ length: 3 }).map((tab, k) => (
          <Tab
            key={k}
            className={({ selected }) =>
              selected ? "py-3 px-1.5 border-t border-black" : "py-3 px-1.5 "
            }
          >
            Tab {k + 1}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="px-4">
        <Tab.Panel>
          <PostsGridPanel />
        </Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default Posts;

const PostsGridPanel = () => (
  <div className="grid gap-7 grid-cols-3">
    {Array.from({ length: 11 }).map((post, k) => (
      <Image
        key={k}
        src={`/larbi-boukert-photo.jpeg`}
        width={256}
        height={256}
        alt="post"
      />
    ))}
  </div>
);
