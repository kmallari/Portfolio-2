import type { NextPage } from "next";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { Stack } from "../components/Stack";
import _ from "lodash";

const Home: NextPage = () => {
  const stackRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>Kevin Mallari | Full Stack Software Engineer</title>
        <meta name='description' content="kevin mallari's personal portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-neutral-light-100 text-neutral-light-100 bg-light-pattern bg-repeat font-switzer overflow-x-hidden'>
        <Navbar stackRef={stackRef} />
        <Header />
        <Stack stackRef={stackRef} />
      </main>
    </>
  );
};

export default Home;
