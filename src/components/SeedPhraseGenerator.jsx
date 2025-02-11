import React, { useState } from "react";
import { generateMnemonic } from "bip39";

function SeedPhraseGenerator() {
  const [mnemonic, setMnemonic] = useState(""); // State to store the seed phrase

  const generateSeedPhrase = () => {
    const newMnemonic = generateMnemonic();  
    console.log("Generated Mnemonic:", newMnemonic);
    setMnemonic(newMnemonic); // Update state to display it on UI
  };

  return (
    <div>
      <h2>Seed Phrase Generator</h2>
      <button onClick={generateSeedPhrase}>Generate Seed Phrase</button>

      {/* Render mnemonic if it exists */}
      {mnemonic && (
        <div>
          <h3>Your Seed Phrase:</h3>
          <p>{mnemonic}</p>
        </div>
      )}
    </div>
  );
}

export default SeedPhraseGenerator;
