import './App.css';
import { useState, useEffect } from 'react';

const url = 'https://type.fit/api/quotes';

function App() {
  const [quotation, setQuotation]= useState('');

  useEffect(() => {
    getRandomQuote();
  }, [])

  const getRandomQuote = () => {
    fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new Error (`${response.status} - ${response.status.text}`)
      }
  
      return response.json();
    })
    .then(quotes => {
      const randomItem = quotes[Math.floor(Math.random() * quotes.length)];
      setQuotation(randomItem)
    })
    console.log(quotation)
  } 

  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">{quotation.text}</div>
        <span id="author">{quotation.author}</span>
        <button id="new-quote" onClick={getRandomQuote}>New Quote</button>
        {/* <a href="" id="tweet-quote">Tweet</a> */}
      </div>
    </div>
  );
}

export default App;
