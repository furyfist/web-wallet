import { ethers } from 'ethers';
import { useState, useEffect } from 'react';

function WalletGenerator({ seedPhrase }) {
  const [wallet, setWallet] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (seedPhrase) {
      generateWallet();
      setShowDetails(false); // Reset show details when new wallet is generated
    }
  }, [seedPhrase]);

  const generateWallet = async () => {
    try {
      const hdNode = ethers.HDNodeWallet.fromPhrase(seedPhrase);
      const path = "m/44'/60'/0'/0/0";
      const wallet = hdNode.derivePath(path);

      setWallet({
        address: wallet.address,
        privateKey: wallet.privateKey,
        publicKey: wallet.publicKey,
        path: path
      });
    } catch (error) {
      console.error('Error generating wallet:', error);
    }
  };

  return (
    <div>
      {wallet && (
        <div>
          <button onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? 'Hide Wallet Details' : 'Show Wallet Details'}
          </button>
          
          {showDetails && (
            <div>
              <h2>Wallet Details</h2>
              <p><strong>Derivation Path:</strong> {wallet.path}</p>
              <p><strong>Address:</strong> {wallet.address}</p>
              <p><strong>Public Key:</strong> {wallet.publicKey}</p>
              <p><strong>Private Key:</strong> {wallet.privateKey}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default WalletGenerator; 