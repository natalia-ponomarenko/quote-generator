import { changeColor } from "../service";
import { useEffect, useCallback } from "react";
import { request } from "../api";

export const QuoteBox = ({ quotation, setQuotation }) => {

  const getRandomQuote = useCallback(() => {
    request().then((quotes) => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuotation(randomQuote);
      changeColor();
    });
  }, [setQuotation])

  useEffect(() => {
    getRandomQuote();
  }, [getRandomQuote]);

  return (
    <div id="quote-box" className="mx-auto rounded">
      <figure>
        <blockquote className="d-flex">
          <i className="fa-solid fa-quote-left px-1"></i>
          <div id="text">{quotation.text}</div>
        </blockquote>
        <figcaption className="text-end">
          <cite>
            <span id="author">
              {quotation.author ? quotation.author : "Unknown"}
            </span>
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
          className="rounded"
          role="button"
        >
          <i className="fa-brands fa-twitter text-light"></i>
        </a>
      </div>
    </div>
  );
};
