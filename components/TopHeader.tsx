import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const TopHeader = (props: Props) => {
  return (
    <header className="p-4 border-b">
      <div className="max-w-4xl mx-auto flex items-center">
        <Link href={"/"}>
          <a className="flex space-x-2">
            <Image
              src="/larbi-boukert-logo.png"
              width={130}
              height={28}
              alt="Larbi Boukert photo"
            />
          </a>
        </Link>
        <div className="ml-auto flex space-x-5">
          {[
            { name: "twitter", url: "https://twitter.com/larbiboukert" },
            { name: "github", url: "https://github.com/larbiboukert" },
            { name: "linkedin", url: "https://linkedin.com/in/larbiboukert" },
            {
              name: "instagram",
              url: "https://www.instagram.com/larbiboukert/",
            },
          ].map((social, k) => (
            <SocialIcon key={k} social={social} />
          ))}
        </div>
        {/* <a
        href="http://blog.larbiboukert.com/"
        target="_blank"
        rel="noreferrer"
        className="px-4 py-2 border-2 rounded-xl shadow-lg
        text-white uppercase font-semibold
        bg-pink-500 hover:bg-pink-400
        transform hover:-translate-y-0.5 transition
        focus:outline-none focus:ring focus:ring-pink-500
        active:bg-pink-600"
        >
        Blog
      </a> */}
      </div>
    </header>
  );
};

export default TopHeader;

const SocialIcon = ({ social }: { social: { name: string; url: string } }) => (
  <a href={social.url} target="_blank" rel="noreferrer">
    <Image
      src={`/icons/${social.name}.png`}
      width={24}
      height={24}
      alt={`Larbi Boukert ${social.name}`}
    />
  </a>
);
