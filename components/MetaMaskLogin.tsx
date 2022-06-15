import Image from 'next/image'
import { useRouter } from "next/router";
import { useEffect } from "react";
import Moralis from "moralis";
import { useMoralis } from "react-moralis";


function MetaMaskLogin() {
    const { isAuthenticated, authenticate } = useMoralis();
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated) router.replace("/dashboard");
    }, [isAuthenticated, router]);


    return (
        <button onClick={() =>
            authenticate({ signingMessage: "Authorize linking of your wallet" })
        } type="button" className="animate-pulse text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
            <Image className="w-6 h-5 mr-2 -ml-1" src='/assets/MetaMask.svg' width='50' height='50' alt='metamask fox' />
            Connect with MetaMask

        </button>
    )
}

export default MetaMaskLogin