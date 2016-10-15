// run with babel using ./node_modules/.bin/babel-node async-await/app.js

const request = require('request');

function getQuote() {
  let quote;
  return new Promise((resolve) => {
    request('http://ron-swanson-quotes.herokuapp.com/v2/quotes', (error, response, body) => {
      quote = body;
      resolve(JSON.parse(quote)[0]);
    });
  });
}

async function main() {
  const quote = await getQuote();
  console.log(quote);
}

main();
console.log('Ron Swanson once said,');
