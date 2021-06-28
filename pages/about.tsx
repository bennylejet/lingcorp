import styles from '../styles/About.module.css'
import Image from 'next/image'
import leslie from '../public/colorleslie.png'
import Link from 'next/link'

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <Link href="/">
          <div className={styles.title}>
            <h1 className={styles.light}>LING</h1>
            <h1 className={styles.red}>CORP</h1>
          </div>
        </Link>
        <h3 className={styles.mining}>ABOUT</h3>
      </div>
      <div className={styles.content}>
        <a href="https://www.twitch.tv/nidas">
        <Image src={leslie} objectPosition="right bottom"></Image>
        <h1>LESLIE LINGBERG</h1>
        </a>
        <em>Business God | Multi-Millionaire</em><br/>
      </div>
    </div>
  )
}