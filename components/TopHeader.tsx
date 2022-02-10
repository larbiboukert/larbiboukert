import React from "react";
import Image from "next/image";
import Link from "next/link";

const SocialIcon = ({ social }: { social: { name: string; url: string } }) => (
  <a href={social.url} target="_blank" rel="noreferrer">
    <Image
      src={`/icons/${social.name}.png`}
      width={32}
      height={32}
      alt={`Larbi Boukert ${social.name}`}
    />
  </a>
);

type Props = {};

const TopHeader = (props: Props) => {
  return (
    <header className="flex items-center p-4 shadow-md">
      <Link href={"/"}>
        <a className="flex space-x-2">
          <Image
            src="/favicon.ico"
            width={48}
            height={48}
            alt="Larbi Boukert photo"
          />
          <h1 className="self-center text-2xl font-bold">Larbi Boukert</h1>
        </a>
      </Link>
      <div className="mx-auto flex space-x-2">
        {[
          { name: "linkedin", url: "https://linkedin.com/in/larbiboukert" },
          { name: "instagram", url: "https://www.instagram.com/larbiboukert/" },
          { name: "twitter", url: "https://twitter.com/larbiboukert" },
          { name: "github", url: "https://github.com/larbiboukert" },
        ].map((social, k) => (
          <SocialIcon key={k} social={social} />
        ))}
      </div>
      <a
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
      </a>
    </header>
  );
};

export default TopHeader;
