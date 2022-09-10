import type { NextPage } from "next";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import _ from "lodash";
import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { Stack } from "../components/Stack";
import { Projects } from "../components/Projects";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Socials } from "../components/Socials";
const Home: NextPage = () => {
  const stackRef = useRef<HTMLDivElement>(null);
  const [isStackInView, setIsStackInView] = useState(false);
  return (
    <GoogleReCaptchaProvider reCaptchaKey='6LfXYj8hAAAAAM46lv4dEP-zSNGG1Yg6A8yQbkfE'>
      <>
        <Head>
          <title>Kevin Mallari | Full Stack Software Engineer</title>
          <meta
            name='description'
            content="kevin mallari's personal portfolio"
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className='bg-neutral-light-100 text-neutral-light-100 bg-light-pattern bg-repeat font-switzer overflow-x-hidden relative'>
          <Navbar stackRef={stackRef} isStackInView={isStackInView} />
          <Socials />
          <Header />
          <Stack stackRef={stackRef} setIsStackInView={setIsStackInView} />
          <Projects />
          <ContactForm />
          <Footer />
        </main>
      </>
    </GoogleReCaptchaProvider>
  );
};

export default Home;
