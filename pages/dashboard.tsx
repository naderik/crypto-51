import type { NextPage } from 'next'
import { useRouter } from "next/router";
import Head from 'next/head'
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import Wallet from '../components/Wallet';


const Dashboard: NextPage = () => {
    const { isAuthenticated } = useMoralis();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) router.replace("/");
    }, [isAuthenticated, router]);


    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <Head>
                <title>Dashboard</title>
                <meta name="My Dashboard" content="A web3 utility tool!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Wallet />
        </div>
    );
}

export default Dashboard