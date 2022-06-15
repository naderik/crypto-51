import type { NextPage } from 'next'
import Head from 'next/head'
import MetaMaskLogin from '../components/MetaMaskLogin'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12" >
      <Head>
        <title>Crypto-51</title>
        <meta name="description" content="A web3 utility tool!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MetaMaskLogin />
    </div>
  )
}

export default Home
