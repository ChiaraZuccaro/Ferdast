import Head from "next/head";
import { Footer } from "../components/Footer/footer";
import { Hero } from "../components/Hero/hero";

import styles from "../styles/Home.module.css";
import { CardList } from "../components/CardList/cardList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        /> */}
      </Head>

      <Hero />
      <main>
        <CardList />
        <CardList />
        <CardList />
        <CardList />
      </main>

      <Footer />
    </div>
  );
}
