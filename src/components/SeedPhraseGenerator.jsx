import { useState } from "react";
import { generateMnemonic } from "bip39";
import WalletGenerator from "./WalletGenerator";


function SeedPhraseGenerator() {
  //console.log("SeedPhraseGenerator component mounted");
  const [mnemonic, setMnemonic] = useState(""); // State to store the seed phrase

  const generateSeedPhrase = () => {
    const newMnemonic = generateMnemonic();  
    console.log("Generated Mnemonic:", newMnemonic);
    setMnemonic(newMnemonic); // Update state to display it on UI
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h2>Seed Phrase Generator</h2>
      <button onClick={generateSeedPhrase}>Generate Seed Phrase</button>

      {/* Render mnemonic if it exists */}
      {mnemonic && (
        <div style={{
          width: '100%',
          wordWrap: 'break-word'
        }}>
          <h3>Your Seed Phrase:</h3>
          {/* Display the seed phrase on UI */}
          <p style={{
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: '#f9f9f9'
          }}>{mnemonic}</p> 
          { /* passing the mnemonic state value as a prop named seedPhrase to the SeedPhraseWallet component. */}
          { mnemonic&&  <WalletGenerator seedPhrase={mnemonic} />}
        </div>
      )}
    </div>
  );
}

export default SeedPhraseGenerator
