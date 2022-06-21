import { NextComponentType } from 'next'
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from "react";
import { IUser } from '../types';
import MoralisType from "moralis";

type Props = {
    user: MoralisType.User;
}

const Wallet: NextComponentType<Props> = ({ user }) => {
    const { isAuthenticated, logout } = useMoralis();
    const [address, setAddress] = useState<any>();
    const [balance, setBalance] = useState<any>();
    const Web3Api = useMoralisWeb3Api();

    useEffect(() => {
        if (isAuthenticated && user) {
            setAddress(user.attributes.ethAddress);
            fetchNativeBalance();
        }
    }, [isAuthenticated]);

    const fetchNativeBalance = async () => {
        if (address) {
            const balance = await Web3Api.account.getNativeBalance();
            setBalance(balance);
            console.log(`Balance: ${balance}`);
        }
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Wallet Address: {address}</div>
                <p className="text-gray-700 text-base">
                    Wallet Balance: {balance} ETH
                </p>
                <button
                    onClick={() => navigator.clipboard.writeText(address?.toString())}
                >
                    Copy
                </button>
            </div>
            <button
                onClick={logout}
                className="px-7 py-4 text-xl rounded-xl text-gray-900 bg-white hover:bg-gray-100"
            >
                Logout
            </button>
            {/* <GiftMeEther /> */}
        </div>
    )
}
export default Wallet