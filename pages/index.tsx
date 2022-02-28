import type { NextPage } from "next";
import Head from "next/head";
import Highlights from "../components/Highlights";
import Posts from "../components/Posts";
import Summary from "../components/Summary";
import TopHeader from "../components/TopHeader";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Larbi Boukert</title>
        <meta
          name="description"
          content="Larbi Boukert Personal Website & Portfolio"
        ></meta>
      </Head>

      <TopHeader />
      <main className="max-w-4xl mx-auto">
        <Summary />
        {/* <Highlights />
        <Posts /> */}
      </main>
    </>
  );
};

export default Home;
