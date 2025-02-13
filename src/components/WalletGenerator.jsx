import { ethers } from 'ethers';
import { useState, useEffect } from 'react';

function WalletGenerator({ seedPhrase }) {
  const [wallets, setWallets] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [walletCount, setWalletCount] = useState(1);

  useEffect(() => {
    if (seedPhrase) {
      generateWallets();
      setShowDetails(false);
    }
  }, [seedPhrase, walletCount]);

  const generateWallets = async () => {
    try {
      const hdNode = ethers.HDNodeWallet.fromPhrase(seedPhrase);
      const basePath = "m/44'/60'/0'/0";
      const newWallets = [];

      for (let i = 0; i < walletCount; i++) {
        const path = `${basePath}/${i}`;
        const wallet = hdNode.derivePath(path);
        newWallets.push({
          index: i,
          address: wallet.address,
          privateKey: wallet.privateKey,
          publicKey: wallet.publicKey,
          path: path
        });
      }

      setWallets(newWallets);
    } catch (error) {
      console.error('Error generating wallets:', error);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      width: '100%'
    }}>
      {seedPhrase && (
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px'
        }}>
          <div>
            <label style={{ marginRight: '10px' }}>
              Number of wallets to generate: 
              <input 
                type="number" 
                min="1" 
                max="10" 
                value={walletCount} 
                onChange={(e) => setWalletCount(Number(e.target.value))}
                style={{
                  marginLeft: '10px',
                  padding: '5px',
                  width: '60px'
                }}
              />
            </label>
          </div>

          {wallets.length > 0 && (
            <div style={{
              width: '100%',
              textAlign: 'center'
            }}>
              <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Hide Wallet Details' : 'Show Wallet Details'}
              </button>
              
              {showDetails && (
                <div style={{
                  marginTop: '20px',
                  width: '100%'
                }}>
                  <h2>Wallet Details</h2>
                  {wallets.map((wallet, index) => (
                    <div key={index} style={{
                      marginBottom: '20px',
                      padding: '15px',
                      border: '1px solid #ccc',
                      borderRadius: '5px',
                      backgroundColor: '#f9f9f9',
                      wordBreak: 'break-all'
                    }}>
                      <h3>Wallet #{wallet.index + 1}</h3>
                      <p><strong>Derivation Path:</strong> {wallet.path}</p>
                      <p><strong>Address:</strong> {wallet.address}</p>
                      <p><strong>Public Key:</strong> {wallet.publicKey}</p>
                      <p><strong>Private Key:</strong> {wallet.privateKey}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default WalletGenerator; 