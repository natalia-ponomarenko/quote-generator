import { useState, useEffect } from "react";
import { changeColor } from "./service";

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
      changeColor();
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="App">
      <div className="d-flex vh-100 align-items-center ">
        <div id="quote-box" className="mx-auto rounded">
          <figure>
            <blockquote className="d-flex">
              <i className="fa-solid fa-quote-left px-1"></i>
              <div id="text">{quotation.text}</div>
            </blockquote>
            <figcaption className="text-end">
              <cite>
                <span id="author">{quotation.author ? quotation.author : 'Unknown' }</span>
              </cite>
            </figcaption>
          </figure>
          <div className="d-flex justify-content-between">
            <button
              type="button"
              id="new-quote"
              className="btn text-light"
              onClick={getRandomQuote}
            >
              New Quote
            </button>
            <a
              href="https://twitter.com/intent/tweet"
              target="_blank"
              id="tweet-quote"
              rel="noreferrer"
              className="p-2 rounded"
              role="button"
            >
              <i className="fa-brands fa-twitter text-light"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;