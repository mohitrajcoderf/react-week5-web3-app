import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';
import { SendTokens } from './SendTokens';
import { SignMessage } from './SignMessage';

function App() {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
      <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={[]} autoConnect>
              <WalletModalProvider>
                <div style={{ display: 'flex', flexDirection: "row-reverse", alignItems: "center" } }>
                  <WalletMultiButton />
                  <WalletDisconnectButton />
                </div>
                {/* <RequestAirdrop />
                <ShowSolBalance /> */}
                {/* <Tokens /> */}
                <span style = {{ padding: '15px 10px 10px', margin: '10px',
                  width: '50%', background: '#f9e5' , fontFamily:  'monospace', display: 'flex', flexDirection: "column", alignItems:  "center" }}>
                <SignMessage />
                <SendTokens />
                </span>
              </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
  );
}

export default App