import Head from 'next/head'
import FindStats from './search';
import User from './user'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>StatTrack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://enmatt.xyz">StatTrack!</a>
        </h1>

        <p className={styles.description}>
          Enter Your Username To Get Started
        </p>

        <FindStats />

        <div>

        </div>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h3>About Us &rarr;</h3>
            <p>Learn about who we are and our journey.</p>
          </a>

          <a href="" className={styles.card}>
            <h3>More &rarr;</h3>
            <p>Take a look at some of our other projects.</p>
          </a>

          <a
            href=""
            className={styles.card}
          >
            <h3>Discord &rarr;</h3>
            <p>Join our discord server for important updates!</p>
          </a>

          <a
            href=""
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
