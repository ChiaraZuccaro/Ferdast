import Head from "next/head";
import { Hero } from "../components/Hero/hero";

import styles from "../styles/Home.module.css";
import { CardList } from "../components/CardList/cardList";
import { useEffect } from "react";
import { useVacationContext } from "../Context/Provider";

export default function Home() {
  const {
    fetchAll,
    state: { vacation, italia, svezia, francia, usa },
  } = useVacationContext();

  useEffect(() => {
    fetchAll("/cities");
  }, []);

  useEffect(() => {
    console.log("vacation", vacation);
    console.log("ita:", italia);

    console.log("sve:", svezia);
    console.log("fra:", francia);
    console.log("usa:", usa);
  }, [vacation]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Ferdast.com</title>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.css"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.png" />
      </Head>

      <Hero />

      <CardList />
    </div>
  );
}
