const RANDOM_QUOTE_API = 'http://api.quotable.io/random'
const quoteDisplay = document.getElementById('')

function getQuote() {
  return fetch(RANDOM_QUOTE_API)
    .then(response => response.json())
    .then(data => data.content);
}

async function getNextQuote() {
  const quote = await getQuote();

}

getQuote();
