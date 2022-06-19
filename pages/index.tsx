import type { NextPage } from 'next'
import Head from 'next/head'
import MetaMaskLogin from '../components/MetaMaskLogin'

const Home: NextPage = () => {
  return (
    <div className="antialiased flex justify-center m-4" >
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
