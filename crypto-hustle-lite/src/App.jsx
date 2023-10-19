import React, { useState, useEffect } from 'react';
import CoinInfo from './components/CoinInfo';
import SideNav from './components/SideNav';
import './App.css';


const API_KEY = import.meta.env.VITE_APP_API_KEY;

const App = () => {
  const [list, setList] = useState(null);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const searchItems = searchValue => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = Object.keys(list.Data).filter((item) => 
        Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(Object.keys(list.Data));
    }
  };

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
      <SideNav />
      <h1>Crypto List</h1>
      <input
  type="text"
  placeholder="Search..."
  onChange={(inputString) => searchItems(inputString.target.value)}
/>
      <ul>
      {searchInput.length > 0
  ? filteredResults.map((coin) => 
      list.Data[coin].PlatformType === "blockchain" ? 
      <CoinInfo
        image={list.Data[coin].ImageUrl}
        name={list.Data[coin].FullName}
        symbol={list.Data[coin].Symbol}
      />
      : null
    )
  : list && Object.entries(list.Data).map(([coin]) => 
      list.Data[coin].PlatformType === "blockchain" ? 
      <CoinInfo
        image={list.Data[coin].ImageUrl}
        name={list.Data[coin].FullName}
        symbol={list.Data[coin].Symbol}
      />
  : null
)}
      </ul>
    </div>
  );
};

export default App;
