import type { NextPage } from 'next'
import { useRouter } from "next/router";
import { useEffect } from "react";
import Moralis from "moralis";
import { useMoralis } from "react-moralis";
import GiftMeEther from '../components/GiftMeEther';


const Dashboard: NextPage = () => {



    const { isAuthenticated, logout } = useMoralis();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) router.replace("/");
    }, [isAuthenticated, router]);

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <GiftMeEther />
            <button
                onClick={logout}
                className="px-7 py-4 text-xl rounded-xl text-gray-900 bg-white hover:bg-gray-100"
            >
                Logout
            </button>
        </div>
    );
}

export default Dashboard