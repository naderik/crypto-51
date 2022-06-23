import type { NextPage } from 'next'
import { useRouter } from "next/router";
import { useEffect } from "react";
import MoralisType from "moralis";
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
            <Wallet />
        </div>
    );
}

export default Dashboard