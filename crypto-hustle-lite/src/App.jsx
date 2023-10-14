import React, { useState, useEffect } from 'react';
import CoinInfo from './components/CoinInfo';
import './App.css';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const App = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    async function fetchAllCoinData() {
      try {
        const response = await fetch(
          `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${API_KEY}`
        );
        const json = await response.json();
        setList(json);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAllCoinData();
  }, []);

  return (
    <div className='whole-page'>
      <h1>Crypto List</h1>
      <ul>
        {list &&
          Object.entries(list.Data).map(([coin, data]) =>
            data.PlatformType === 'blockchain' ? (
              <CoinInfo
                key={coin}
                image={data.ImageUrl}
                name={data.FullName}
                symbol={data.Symbol}
              />
            ) : null
          )}
      </ul>
    </div>
  );
};

export default App;
