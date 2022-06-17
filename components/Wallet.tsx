import GiftMeEther from './GiftMeEther'
import { useMoralis } from "react-moralis";

function Wallet() {
    const { logout } = useMoralis();
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Wallet Address: 0x0000000000000000000</div>
                <p className="text-gray-700 text-base">
                    Wallet Balance: 0.368 ETH
                </p>
            </div>
            <button
                onClick={logout}
                className="px-7 py-4 text-xl rounded-xl text-gray-900 bg-white hover:bg-gray-100"
            >
                Logout
            </button>
            <GiftMeEther />
        </div>
    )
}

export default Wallet