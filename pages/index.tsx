import Head from "next/head";
import {VT323} from "next/font/google"
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const cagatonDate = new Date("2024-09-05");
const vt323Font = VT323({weight: '400',subsets: ['latin']});


export default function Home() {
  const [currDate, setCurrDate] = useState(
    cagatonDate.getTime() - new Date().getTime()
  );

  setInterval(function () {
    setCurrDate(cagatonDate.getTime() - new Date().getTime());
  }, 1000);

  return (
    <>
      <Head>
        <title>Cagatón 💩</title>
        <meta name="description" content="Cagatón 💩" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/poop.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className={`${styles.main} ${vt323Font.className}`}>
        <h1>Faltan</h1>
        <h2 className={styles.timer} suppressHydrationWarning={true}>
          {getRemainingTime(currDate)}
        </h2>
        <h3>... para el cagatón</h3>
      </main>
    </>
  );
}

function getDaysFromMillisecons(time: number) {
  return Math.floor(time / (1000 * 60 * 60 * 24));
}

function getHoursFromMilliseconds(time: number) {
  return Math.floor(time / (1000 * 60 * 60));
}

function getMinutesFromMilliseconds(time: number) {
  return Math.floor(time / (1000 * 60));
}

function getSecondsFromMilliseconds(time: number) {
  return Math.floor(time / 1000);
}

function getRemainingTime(time: number) {
  let tempTime = time;
  const days = String(getDaysFromMillisecons(tempTime)).padStart(2, "0");
  tempTime = tempTime % (1000 * 60 * 60 * 24);

  const hours = String(getHoursFromMilliseconds(tempTime)).padStart(2, "0");
  tempTime = tempTime % (1000 * 60 * 60);

  const minutes = String(getMinutesFromMilliseconds(tempTime)).padStart(2, "0");
  tempTime = tempTime % (1000 * 60);

  const seconds = String(getSecondsFromMilliseconds(tempTime)).padStart(2, "0");

  return `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
}
