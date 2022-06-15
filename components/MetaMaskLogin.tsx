import Image from 'next/image'
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";


function MetaMaskLogin() {
    const { isAuthenticated, authenticate, authError } = useMoralis();
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated) router.replace("/dashboard");
    }, [isAuthenticated, router]);


    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <button onClick={() =>
                authenticate({ signingMessage: "Authorize linking of your wallet" })
            } type="button" className="animate-pulse text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
                <Image className="w-6 h-5 mr-2 -ml-1" src='/assets/MetaMask.svg' width='50' height='50' alt='metamask fox' />
                Connect with MetaMask

            </button>
            {authError && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">{authError.name}</strong>
                <span className="block sm:inline">{authError.message}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                </span>
            </div>
            }

        </div>

    )
}

export default MetaMaskLogin