import Image from 'next/image'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";


function MetaMaskLogin() {
    const { isAuthenticated, authenticate, authError } = useMoralis();
    const [showAlert, setShowAlert] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated) router.replace("/dashboard");
    }, [isAuthenticated, router]);

    // set showalert to true when autherror is received
    useEffect(() => {
        if (authError) setShowAlert(true);
    }
        , [authError]);

    return (

        <div className="h-screen w-screen flex flex-col items-center justify-center">
            {
                showAlert && authError ? (
                    <div
                        className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500"
                    >
                        <span className="text-xl inline-block mr-5 align-middle">
                            <i className="fas fa-bell" />
                        </span>
                        <span className="inline-block align-middle mr-8">
                            <b className="capitalize">{authError.name}!</b> {authError.message}
                        </span>
                        <button
                            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                            onClick={() => setShowAlert(false)}
                        >
                            <span>×</span>
                        </button>
                    </div>
                ) : null
            }
            <button onClick={() =>
                authenticate({ signingMessage: "Authorize linking of your wallet" })
            } type="button" className="animate-pulse text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
                <Image className="w-6 h-5 mr-2 -ml-1" src='/assets/MetaMask.svg' width='50' height='50' alt='metamask fox' />
                Connect with MetaMask

            </button>
        </div>

    )
}

export default MetaMaskLogin