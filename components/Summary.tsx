import Image from "next/image";
import React from "react";

type Props = {};

function Summary({}: Props) {
  return (
    <section about="Larbi Boukert summary" className="flex mt-8">
      <div className="self-start mx-24 p-1 rounded-full bg-gradient-to-tr from-yellow-400 to-fuchsia-600">
        <div className="relative w-48 h-48 p-1 rounded-full bg-white">
          <Image
            src={`/larbi-boukert-photo.jpeg`}
            // width={168}
            // height={168}
            layout="fill"
            alt="Larbi Boukert photo"
            className="m-1 rounded-full"
            priority
          />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex">
          <p className="text-2xl font-light mr-2">larbiboukert</p>
          <Image
            src={`/icons/verified-badge.png`}
            width={24}
            height={24}
            layout="fixed"
            alt="verified icon"
          />
        </div>
        <div className="flex mt-5 space-x-10">
          <MetaInfo number="16" title="projects" />
          <MetaInfo number="7" title="teams" />
          <MetaInfo number="12" title="clients" />
        </div>
        <p className="mt-5 text-lg font-semibold">Larbi Boukert</p>
        <p className="text-slate-500">Web Developer - SaaS</p>
        <ul className="ml-5 list-disc">
          <li>React/Next.js | JS/TS ⚛️</li>
          <li>.NET/ASP.NET Core 🚀</li>
          <li>Node/Express.js ✨</li>
        </ul>
        <p className="mt-2">🔽CHECKOUT MY BLOG🔽</p>
        <a
          href="http://blog.larbiboukert.com/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-blue-900"
        >
          blog.larbiboukert.com
        </a>
      </div>
    </section>
  );
}

export default Summary;

const MetaInfo = ({ number, title }: { number: string; title: string }) => (
  <div className="flex">
    <p className="font-semibold mr-1">{number}</p>
    <p>{title}</p>
  </div>
);
