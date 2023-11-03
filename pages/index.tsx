
import type { NextPage } from "next";
import Head from "next/head";
import Social from "../components/SocialLinks";
import Header from "../components/Header";
import pageStyles from "../styles/Page.module.css";
import { SOCIAL_LINKS } from "../constants";

const Home: NextPage = () => {
  return (
    <div className={pageStyles.grid}>
      <Head>
        <title>RL/RN</title>
        <meta name="description" content="Nazym Jumadilova | Frontend and Photography" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={pageStyles.about}>
        <div className={pageStyles.text}>
          <h1 className={pageStyles.title}>
            Hello ☀️
          </h1>
          <div className={pageStyles.description}>
            <p>
              I&apos;m Nazym, <br /> a Senior Frontend Engineer at <a className={pageStyles.link} href="https://www.deliveryhero.com" target="_blank" rel="noopener">Delivery Hero</a> (Berlin, Germany).
            </p>
            <p>I strive to create web applications that are aesthetically beautiful, fast, stable, and secure.</p>

          </div>
          <Social links={SOCIAL_LINKS} />
        </div>

      </main>
      <footer className={pageStyles.footer} />
    </div>
  );
};

export default Home;
