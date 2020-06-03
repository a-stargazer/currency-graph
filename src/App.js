import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    const [currencies, setCurrencies] = useState([
      "CAD", "AUD", "HK", "USD", "GBP",
      ]);
    const [rate, setRate] = useState([]);

function doFetch() {
    const url = "https://api.exchangeratesapi.io/latest";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('data rates:', data.rates);
            setRate(Object.entries(data.rates));
            setCurrencies(currencies);
    });
}

useEffect(doFetch, []);

  return (
    <div className="NavBar">
      <h1>Currency Rates</h1>

    <div className="BarChart">
    {
      rate
      .filter(rate => currencies.includes(rate[0])) 
      .map(rate => (
        <div 
        className="BarChart-bar" 
        style={{height: rate.percentage + "%"}}>
         {rate[0]}<br></br>
         {rate[1]}
        </div>
      ))
    }
    </div>
  </div>
  );
}
  

export default App;