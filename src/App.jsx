import './App.css'
import SeedPhraseGenerator from './components/SeedPhraseGenerator'

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h2>Welcome to the Web Wallet</h2>
      <SeedPhraseGenerator />
      <h3 style={{fontSize: '10px'}}>Made by @imfuryfist</h3>
    </div>
  )
}

export default App
