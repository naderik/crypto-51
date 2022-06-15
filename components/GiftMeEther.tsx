import { useWeb3Transfer } from "react-moralis";
import Moralis from "moralis";

function GiftMeEther() {

    const { fetch, error, isFetching } = useWeb3Transfer({
        type: "native",
        amount: Moralis.Units.ETH(0.5),
        receiver: "0xc4c2e4B9B212be4f41382389a6dB2db2C8427f04",
    });
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <button
                onClick={() => fetch()} disabled={isFetching}
                className="px-7 py-4 mb-5 text-xl rounded-xl text-gray-900 bg-white hover:bg-gray-100"
            >
                Send ETH!
            </button>

        </div>
    )
}

export default GiftMeEther