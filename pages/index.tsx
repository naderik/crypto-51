import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Crypto-51</title>
        <meta name="description" content="A web3 utility tool!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
        <Image className="w-6 h-5 mr-2 -ml-1" src='/assets/MetaMask.svg' width='50' height='50' alt='metamask fox' />
        Connect with MetaMask
      </button>

    </div>
  )
}

export default Home
