import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const API_KEY = import.meta.env.VITE_APP_API_KEY;
  const [list, setList] = useState(null)
  useEffect(() => {
    async function fetchAllCoinData() {
      const response = await fetch("https://min-api.cryptocompare.com/data/all/coinlist?&api_key"+ API_KEY)
      const json = await response.json()
      setList(json)
    }
    fetchAllCoinData().catch(console.error);
  }, [])
  return (
    <div className='whole-page'>
  <h1>Crypto List</h1>
  <ul>
    {list && Object.entries(list.Data).map(([coin, data]) => 
      data.PlatformType === "blockchain" ? (
        <li key={data.FullName}>{data.FullName}</li>
      ) : null
    )}
  </ul>
</div>

  )
}
export default App
