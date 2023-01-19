const quotesURL = "https://type.fit/api/quotes";

export const request = (url = quotesURL, options = {}) =>
  fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error(`Quote wasn't downloaded`);
    }

    return response.json();
  });
