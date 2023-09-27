import React, { useState } from 'react'
import Upgrade from './components/Upgrade'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const updateCount = () => setCount(count + multiplier)
  const buyDoubleStuffed = () => {
    if(count >= 10) {
      setMultiplier(multiplier * 2)
      setCount(count - 10)
    } 
    
  }

  const buyPartyPack = () => {
    if(count >= 100) {
      setMultiplier(multiplier * 5)
      setCount(count - 100)
    }
  }

  const buyFullFeast = () => {
    if(count >= 1000) {
      setMultiplier(multiplier * 10)
      setCount(count - 1000)
    }
  }
  return (
    <div className="App">
      <div>
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img src="src/assets/samosa.png" className="samosa" onClick={updateCount}/>
      </div>
      <div className="Container">
        <div className="upgrade" onClick={buyDoubleStuffed}> <Upgrade packageName="DoubleStuffed" numPerClick="2x per" addSamosa="10 samosas"/> </div>
        <div className="upgrade" onClick={buyPartyPack}> <Upgrade packageName="PartyPack" numPerClick="5x per click" addSamosa="100 samosas"/> </div>
        <div className="upgrade" onClick={buyFullFeast}> <Upgrade packageName="FullFeast" numPerClick="10x per click" addSamosa="1000 samosas"/> </div>
      </div>
    </div>
  )
}

export default App
