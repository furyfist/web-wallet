import './App.css'
import SeedPhraseGenerator from './components/SeedPhraseGenerator'
import WalletGenerator from './components/WalletGenerator'



function App() {
  return (
    <div>
     <h2>Welcom to the Web wallet</h2>
     <SeedPhraseGenerator />
     <WalletGenerator />
    </div>
  )
}

export default App
