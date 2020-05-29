import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
    const [currencies, setCurrencies] = useState([
      "CAD", "AUD", "HK", "USD", "GBP",
      ]);
    const [rates, setRates] = useState([]);

function doFetch() {
    const url = "https://api.exchangeratesapi.io/latest";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('data:', data);
            setCurrencies(currencies);
    });
}

useEffect(doFetch, []);


/* from 2.3 API lecture, activity 5

function doFetch() {
  console.log('doFetch is being clicked');
  let searchInput = document.querySelector('#search');
  console.log('search input is:', searchInput);
  let value = searchInput.value;
  let url = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + value;

  fetch(url)
      .then(response => response.json())
      .then(jsonData => {
          let arrayOfGifs = jsonData.data;
          console.log('arrays: ', arrayOfGifs);
          gifArray = arrayOfGifs;
    });
}
 */

 /* from index.html from HW #1 

         <!-- Header -->
        <div class="NavBar">
            <h1 class="NavBar-heading">Currency Rates for EUR (€)</h1>
        </div>
        
        <!-- Visual Bars -->
        <div class="BarChart">
            <div onclick="alert('1 EUR = 1.5178 CAD')" class="BarChart-bar" style="height: 66.7%">
              CAD $
            </div>

            <div onclick="alert('1 EUR = 1.6625 AUD')" class="BarChart-bar" style="height: 58.8%">
              AUD $
            </div>

            <div onclick="alert('1 EUR = 8.4154 HKD')" class="BarChart-bar" style="height: 11.9%">
              HK $
            </div>

            <div onclick="alert('1 EUR = 1.0858 USD')" class="BarChart-bar" style="height: 90.9%">
              USD $
            </div>

            <div onclick="alert('1 EUR = 0.87773 GBP')" class="BarChart-bar" style="height: 87.8%">
              GBP £
            </div>
        </div>*/


  return (
    <div className="NavBar">
    <h1>Currency Rates</h1>
    <div className='Currency'>
    {
      rates
      .map(rate => (
        <div className="BarChart-bar" style={{height: rate.percentage + "%"}}>
          {rate.label}
        </div>
      ))
    }
    </div>

    </div>
  );
}

export default App;
