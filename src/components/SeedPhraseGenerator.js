import { useState } from "react";
import bip39 from 'bip39';

const SeedPhraseGenerator = () => {
    const [mnemonic, setMemonic] = useState('');

    // function to generate seed phrase
    const generateSeedPhrase = () => {
        const generatedMnemonic = bip39.generateMnemonic();
        setMemonic(generatedMnemonic);
    };

    return (
        <div className="seed-phrase-generator">
            <h2> Seed Phrase Generator</h2>
            <button onClick={generateSeedPhrase}>Generate Seed Phrase</button>
            {mnemonic && (
                <div>
                    <h3>Your Seed Phrase: </h3>
                    <p>{mnemonic}</p>
                </div>
            )}
        </div>
    );
};

export default SeedPhraseGenerator;
