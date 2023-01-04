import "./App.css";
import { useState, useEffect, useCallback } from "react";

const url = "https://type.fit/api/quotes";

function App() {
  const [quotation, setQuotation] = useState("");

  const getRandomQuote = () => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} - ${response.status.text}`);
        }

        return response.json();
      })
      .then((quotes) => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuotation(randomQuote);
      });
    console.log(quotation);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);


  return (
    <div className="App">
      <div className="d-flex vh-100 align-items-center">
        <div id="quote-box" className="mx-auto w-25">
          <figure>
            <blockquote class="blockquote">
              <div id="text">{quotation.text}</div>
            </blockquote>
            <figcaption>
              <cite>
                <span id="author">{quotation.author}</span>
              </cite>
            </figcaption>
          </figure>
          <button
            id="new-quote"
            className="btn btn-outline-info"
            onClick={getRandomQuote}
          >
            New Quote
          </button>
          <a
            href="https://twitter.com/intent/tweet"
            target="_blank"
            id="tweet-quote"
            rel="noreferrer"
          >
            Tweet
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
