// component in react is similar to create your
// own html tags

import { useConnection, useWallet } from "@solana/wallet-adapter-react"
 //the useWallet 'hook' "provides" the wallet variable inside the Airdrop "component".

    // because i wrapped the airdrop component inside the walletProvider.

export function Airdrop() {
    //hooks in react.
    

    const wallet = useWallet();
    const { connection } = useConnection();
    // define the function inside the component body.
    async function sendAirdropToUser() {
        const amount = document.getElementById("publicKey").value;
       await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
       alert("airdropped solana");
    }
    return <div>
        <input type="text" placeholder="Amount"></input>
        <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
}