import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import leslie from '../public/leslie2.png';
import { useState } from 'react';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <h1 className={styles.light}>LING</h1>
          <h1 className={styles.red}>CORP</h1>
        </div>
        <div className={styles.links}>
          <Link href="/mining">
            <a>Mining</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
      </div>
      <Image src={leslie} objectPosition="right bottom"></Image>
    </div>
  )
}
