import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center font-mono font-bold border-b bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4 lg:bg-zinc-800/30">
          social:&nbsp;<code>@larbiboukert</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <p className="font-bold pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
            Larbi Boukert
          </p>
        </div>
      </div>

      <div
        className="relative flex place-items-center before:absolute
        before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-['']
        after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] 
        before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 
        after:via-[#0141ff] after:opacity-40 before:lg:h-[180px]"
      >
        <p className="text-6xl font-semibold drop-shadow-[0_0_0.3rem_#ffffff70] text-center sm:text-start">
          Larbi Boukert
        </p>
      </div>

      <div className="mt-8 lg:mt-0 mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {[
          {
            title: "Frontend Dev",
            description:
              "UI/UX, Fast, Optimized and Responsive Websites, Web Apps, Dashboards & Landing Pages.",
          },
          {
            title: "Backend Dev",
            description:
              "Web Services, REST and GraphQL APIs, Authentication and Authorization, Database Administration.",
          },
          {
            title: "Software Engineer",
            description:
              "Proficient in Coding, Debugging, Testing, and Problem-Solving, Delivering Production-Grade Software.",
          },
          {
            title: "Team Player",
            description:
              "Collaborative, Adaptable, Effectively Communicates Ideas and Facilitates Problem-Solving Discussions.",
          },
          {
            title: "React & Next.js",
            description:
              "TypeScript, React Query, Zod, Tailwind CSS & Material UI",
          },
          {
            title: "Node.js",
            description:
              "Express, TypeScript, Prisma, Zod, PostgresQL & MongoBD",
          },
          {
            title: "ASP.NET",
            description:
              "Web API, Entity Framework Core, Authentication & Identity",
          },
          {
            title: "Workflow & Collab",
            description: "AWS, GitHub, Slack, Jira.",
          },
        ].map((skill, key) => (
          <Link
            key={key}
            href="#"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
          >
            <h2
              className={`${inter.className} mb-3 text-2xl font-semibold whitespace-nowrap`}
            >
              {`${skill.title} `}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
            >
              {skill.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
