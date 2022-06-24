import { NextComponentType } from 'next'
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from "react";
import MoralisType from "moralis";
import { VscCopy } from 'react-icons/vsc';
import { FaWallet } from 'react-icons/fa';

type Props = {
    user: MoralisType.User;
}

const Wallet: NextComponentType<Props> = () => {
    const { isAuthenticated, logout, user } = useMoralis();
    const [address, setAddress] = useState<any>();
    const [balance, setBalance] = useState<string>();
    const [showAddressCopied, setShowAddressCopied] = useState<boolean>(false);
    const Web3Api = useMoralisWeb3Api();



    useEffect(() => {
        if (isAuthenticated && user) {
            setAddress(user.attributes.ethAddress);
            const fetchNativeBalance = async () => {
                const options = {
                    address: address,
                }
                const balanceFromAccount = await Web3Api.account.getNativeBalance(options);
                setBalance(balanceFromAccount.balance);
            }
            fetchNativeBalance();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, user]);

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(address);
        setShowAddressCopied(true);
        setTimeout(() => {
            setShowAddressCopied(false);
        }
            , 3000);
    }

    // mutate the address to show only the first 6 and last 5 characters and replace the rest with dots
    const addressToShow = address ? address.substring(0, 6) + '...' + address.substring(address.length - 5) : '';


    return (
        <div className="px-4 py-4 flex-auto rounded shadow-2xl">
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
                        <span>×</span>
                    </button>
                </div>
            ) : null}
            <div className="px-2 py-2 flex-auto">
                <span className="px-4 py-4 font-mono font-bold text-2xl flex flex-row text-gray-900 rounded-xl bg-white border-double border-2 border-gray-500">
                    <FaWallet className="mx-4" size='4rem' />
                    Welcome To Your Ethereum Wallet !
                </span>
            </div>
            <div className="px-2 py-2 flex-auto">
                <button className="px-4 py-4 my-2 text-gray-900 rounded-xl bg-white hover:bg-gray-100 border-solid border-2 border-gray-500 "
                    onClick={() => handleCopyAddress()}
                >
                    <span className="font-bold font-mono text-2xl flex flex-row">
                        Wallet Address: {addressToShow}
                        <VscCopy className="mx-4" size='2rem' />
                    </span>
                </button>
            </div>
            <div className="px-2 py-2 flex-auto">
                <span className="px-4 py-4 my-2  text-2xl font-mono font-bold text-gray-900 rounded-xl bg-white hover:bg-gray-100 border-solid border-2 border-gray-500  ">
                    Wallet Balance: {balance} ETH
                </span>
            </div>
            <div className="px-2 py-2 flex-auto">
                <button className="px-4 py-4 my-2 font-mono font-bold text-2xl rounded-xl text-gray-900 bg-white hover:bg-gray-100 border-solid border-2 border-gray-500 "
                    onClick={logout}
                >
                    Logout
                </button>
            </div>
        </div>
    )
}
export default Wallet