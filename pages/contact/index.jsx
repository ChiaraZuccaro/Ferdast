import { Input } from "./Input/input";
import styles from "./styles.module.scss";
import Head from "next/head";
import { useState } from "react";
export default function Contact() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");

  const sendForm = (event) => {
    event.preventDefault;
    console.log(name, surname, mail);
  };
  return (
    <div>
      <Head>
        <title>Contattaci</title>
        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles.formContainer}>
        {/* MOBILE FORM */}
        <form
          className={`${styles.formWrapper} ${styles.mobile}`}
          onSubmit={sendForm}
        >
          <Input text="Nome" id="name" setValue={setName} value={name} />
          <Input
            text="Cognome"
            id="surname"
            setValue={setSurname}
            value={surname}
          />

          <Input text="Email" id="mail" setValue={setMail} value={mail} />
          <select className={styles.select}>
            <option disabled selected>
              Seleziona il tuo paese
            </option>
            <option>Italia</option>
            <option>Russia</option>
            <option>Francia</option>
            <option>USA</option>
          </select>
          <Input text="Scrivi il messaggio" id="subject" />

          <input type="submit" className={styles.arrowBtn} value="Invia" />
        </form>

        {/* DESKTOP VERSION */}
        <form
          className={`${styles.formWrapper} ${styles.desktop}`}
          onSubmit={sendForm}
        >
          <div className={styles.name}>
            <Input text="Nome" id="name" value={setName} />
            <Input text="Cognome" id="surname" value={setSurname} />
          </div>

          <div className={styles.name}>
            <Input text="Email" id="mail" value={setMail} />
            <select className={styles.select}>
              <option disabled selected>
                Seleziona il tuo paese
              </option>
              <option>Italia</option>
              <option>Russia</option>
              <option>Francia</option>
              <option>USA</option>
            </select>
          </div>

          <Input text="Scrivi il messaggio" id="subject" />

          <input type="submit" className={styles.arrowBtn} value="Invia" />
        </form>
      </div>
    </div>
  );
}
