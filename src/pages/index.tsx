import type { NextPage } from "next";
import Head from "next/head";
import SearchBox from "../components/SearchBox";
import Header from "../layout/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Check the weather" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col">
        <Header />
        <SearchBox />
      </div>
    </div>
  );
};

export default Home;
