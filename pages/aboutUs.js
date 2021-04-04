import Head from 'next/head'
import FindStats from './search';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>StatTrack | About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            <a href="./">StatTrack!</a>
        </h1>

        <p className={styles.description}>
          About Us.
        </p>

        <div className={styles.text}>
            <p>
                StatTrack is a Hypixel stat tracking website that comunicates directly with the Hypixel API to get the most accurate and up-to-date information about your Hypixel journey. We aim to make veiwing your Hypixel stats as easy as possible without even logging into the server. If you enjoy using StatTrack, then feel free to share it with your friends and check out some of our other projects which you might like.
            </p>
        </div>

        <div className={styles.grid}>
          <a href="./aboutUs" className={styles.card}>
            <h3>About Us &rarr;</h3>
            <p>Learn about who we are and our journey.</p>
          </a>

          <a href="https://github.com/MattGodwin" className={styles.card}>
            <h3>More &rarr;</h3>
            <p>Take a look at some of our other projects.</p>
          </a>

          <a
            href="https://discord.gg/Qj6eTWS"
            className={styles.card}
          >
            <h3>Discord &rarr;</h3>
            <p>Join our discord server for important updates!</p>
          </a>

          <a
            href="https://ko-fi.com/enmatt"
            className={styles.card}
          >
            <h3>Donate &rarr;</h3>
            <p>Any donations are greatly appreciated.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://enmatt.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Enmatt
        </a>
      </footer>
    </div>
  )
}
