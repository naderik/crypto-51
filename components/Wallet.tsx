import { NextComponentType } from 'next'
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from "react";
import { IUser } from '../types';
import MoralisType from "moralis";
import { VscCopy } from 'react-icons/vsc';

type Props = {
    user: MoralisType.User;
}

const Wallet: NextComponentType<Props> = ({ user }) => {
    const { isAuthenticated, logout } = useMoralis();
    const [address, setAddress] = useState<any>();
    const [balance, setBalance] = useState<any>();
    const [showAddressCopied, setShowAddressCopied] = useState<boolean>(false);
    const Web3Api = useMoralisWeb3Api();

    useEffect(() => {
        if (isAuthenticated && user) {
            setAddress(user.attributes.ethAddress);
            fetchNativeBalance();
        }
    }, [isAuthenticated]);

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(address);
        setShowAddressCopied(true);
        setTimeout(() => {
            setShowAddressCopied(false);
        }
            , 3000);
    }

    const fetchNativeBalance = async () => {
        if (address) {
            const balance = await Web3Api.account.getNativeBalance();
            setBalance(balance);
            console.log(`Balance: ${balance}`);
        }
    }

    // mutate the address to show only the first 6 and last 4 characters and replace the rest with dots
    const addressToShow = address ? address.substring(0, 6) + '...' + address.substring(address.length - 4) : '';

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {showAddressCopied ? (
                <div
                    className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-emerald-500"
                >
                    <span className="text-xl inline-block mr-5 align-middle">
                        <i className="fas fa-bell" />
                    </span>
                    <span className="inline-block align-middle mr-8">
                        <b className="capitalize">Address Copied to Clipboard!</b>
                    </span>
                    <button
                        className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                        onClick={() => setShowAddressCopied(false)}
                    >
                        <span></span>
                    </button>
                </div>
            ) : null}

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Address: {addressToShow}</div>
                <button className="px-4 py-4 rounded-xl text-gray-900 bg-white hover:bg-gray-100"
                    onClick={() => handleCopyAddress()}
                >
                    <VscCopy size='2rem' />
                </button>
                <p className="text-gray-700 text-base">
                    Wallet Balance: {balance} ETH
                </p>
                <button
                    onClick={logout}
                    className="px-7 py-4 mx-4 my-4 text-xl rounded-xl text-gray-900 bg-white hover:bg-gray-100"
                >
                    Logout
                </button>
            </div>

            {/* <GiftMeEther /> */}
        </div>
    )
}
export default Wallet