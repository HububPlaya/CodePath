import React, { useState } from 'react'
import Upgrade from './components/Upgrade'
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <h1>Samosa Selector</h1>
        <h2>Count: </h2>
        <img src="src/assets/samosa.png" className="samosa"/>
      </div>
      <div className="Container">
        <Upgrade />
        <Upgrade />
        <Upgrade />
      </div>
    </div>
  )
}

export default App
