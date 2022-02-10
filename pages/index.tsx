import type { NextPage } from "next";
import Head from "next/head";
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

      
    </>
  );
};

export default Home;
