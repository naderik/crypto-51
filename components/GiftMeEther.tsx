import { useWeb3Transfer } from "react-moralis";
import Moralis from "moralis";

function GiftMeEther() {
    

    const { fetch, error, isFetching } = useWeb3Transfer({
        type: "native",
        amount: Moralis.Units.ETH(0.5),
        receiver: "0xc4c2e4B9B212be4f41382389a6dB2db2C8427f04",
    });
    return (
        <div>
            <button
                onClick={() => fetch()} disabled={isFetching}
                className="px-7 py-4 mb-5 text-xl rounded-xl text-gray-900 bg-white hover:bg-gray-100"
            >
                Gift me 0.5 ETH!
            </button>
            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">{error.name}</strong>
                <span className="block sm:inline">{error.message}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                </span>
            </div>
            }
        </div>
    )
}

export default GiftMeEther