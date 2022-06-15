import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto-51</title>
        <meta name="description" content="A web3 utility tool!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button
        className="px-7 py-4 text-xl rounded-xl bg-yellow-300 animate-pulse"
      >
        Login using Metamask
      </button>
    </div>
  )
}

export default Home
