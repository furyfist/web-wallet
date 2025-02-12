import React, { useState } from 'react';
import SeedPhraseGenerator from './SeedPhraseGenerator'; // Import the generator
import { mnemonicToSeedSync } from '@scure/bip39';
import { HDKey } from '@scure/bip32';
import { keccak256 } from 'ethereumjs-util';

function SeedPhraseWallets() {
  const [mnemonic, setMnemonic] = useState('');

  const deriveWallets = (mnemonic) => {
    const seed = mnemonicToSeedSync(mnemonic);
    const masterKey = HDKey.fromMasterSeed(seed);
    const wallets = [];

    // Generate wallets
    for (let i = 0; i < 3; i++) {
      const derivationPath = `m/44'/60'/0'/0/${i}`;
      const childKey = masterKey.derive(derivationPath);
      const publicKey = childKey.publicKey;
      const address = '0x' + keccak256(publicKey).toString('hex').slice(-40);

      wallets.push({
        index: i,
        derivationPath,
        publicKey: publicKey.toString('hex'),
        address
      });
    }

    return wallets;
  };

  return (
    <div>
      <SeedPhraseGenerator onSeedGenerated={setMnemonic} /> {/* Pass seed to the parent */}
      
      {mnemonic && (
        <div>
          <h3>Generated Wallets:</h3>
          {deriveWallets(mnemonic).map((wallet) => (
            <div key={wallet.index}>
              <p>
                <strong>Wallet {wallet.index + 1}</strong><br />
                Path: {wallet.derivationPath}<br />
                Public Key: {wallet.publicKey}<br />
                Address: {wallet.address}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SeedPhraseWallets;
