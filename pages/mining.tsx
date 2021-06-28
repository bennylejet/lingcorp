import styles from '../styles/Mining.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Mining() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LINGCORP | MINING</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.titleContainer}>
        <Link href="/">
          <div className={styles.title}>
            <h1 className={styles.light}>LING</h1>
            <h1 className={styles.red}>CORP</h1>
          </div>
        </Link>
        <h3 className={styles.mining}>Mining</h3>
      </div>
      <div className={styles.content}>
        <h1>OUR MISSION</h1>
          <p><em>Mines, not nines</em></p>
          <p><em>Power to the prisoners</em></p>
          <p><em>Power to the city</em></p>
          <p><em>Power to the people</em></p>
      </div>
      
    </div>
  )
}