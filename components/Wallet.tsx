import { NextComponentType } from 'next'
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { useEffect, useState } from "react";
import MoralisType from "moralis";
import { VscCopy } from 'react-icons/vsc';

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

    // mutate the address to show only the first 6 and last 4 characters and replace the rest with dots
    const addressToShow = address ? address.substring(0, 6) + '...' + address.substring(address.length - 4) : '';

    console.log(`Balance: ${balance}`);

    return (
        <div className="rounded overflow-hidden shadow-lg">
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

            <div className="px-6 py-6">
                <div className="font-bold text-xl justify-center items-center">Wallet Address: {addressToShow}</div>
                <button className="px-4 py-4 rounded-xl text-gray-900 bg-white hover:bg-gray-100"
                    onClick={() => handleCopyAddress()}
                >
                    <VscCopy size='2rem' />
                </button>
                <span className="text-gray-900 text-base">
                    Wallet Balance: {balance} ETH
                </span>
                <button
                    onClick={logout}
                    className="px-7 py-4 mx-4 my-4 text-xl rounded-xl text-gray-900 bg-white hover:bg-gray-100"
                >
                    Logout
                </button>
            </div>
        </div>
    )
}
export default Wallet