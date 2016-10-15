# Solving Asynchronous JavaScript content for Skill-Building Program:  

https://github.com/fs-webdev/skill-building-program/blob/master/badges-active/javascript/_micro_async-programming.md

## [x] Promises Demo

`promises/promise-demo.html` and `promises/promise-demo.js` demonstrate in ES6 VanillaJS:
- [x] `fetch` over a mapped array of urls to return an array of promises
- [x] `Promise.all()` on that map of promises
- [x] Building each TV show element using template strings and innerHTML on in-memory elements
- [x] Assembling show elements together in memory as a `DocumentFragment` before injecting it to DOM with one `appendChild` operation


-----


## [x] Generators Demo

`generators/server`:
- [x] Creates express server to respond to `/api/currentWeather`
- [x] Does a fake polling response for client-side demo to use generators

`generators/generator-demo.html` and `generators/generator-demo.js` demonstrate in ES6 VanillaJS:
- [x] `pollForWeatherInfo()` is a generator function.
- [x] It yields at the `fetch` operation.
- [x] `runPolling()` takes the generator function as a default param
- [x] It runs `generator.next()` until it gets back `data.temperature`, in which case it prints out the value to `console.log()`


-----


## [x] Async/Await Demo

`async-await/app.js` demonstrates in ES6 VanillaJS:
- [x] `getQuote()` returns a `Promise` that runs an async request for a Ron Swanson quote.
- [x] `async function main()` assigns the return value of that quote to a const using `await`
- [x] The code in `main` is written in top to bottom sync style, even though it runs an asynchronous behavior and logs it on the next line.
- [x] async-await native support won't land in node until v7, so it has to be run with babel using `./node_modules/.bin/babel-node async-await/app.js`
