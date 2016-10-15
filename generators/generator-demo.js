// A demo for async programming in JavaScript
// Solving for: https://github.com/fs-webdev/skill-building-program/blob/master/badges-active/javascript/_micro_async-programming.md

const WEATHER_URL = 'http://localhost:8000/api/currentWeather';

function* pollForWeatherInfo() {
  while (true) {
    yield fetch(WEATHER_URL, {
      method: 'GET',
    })
    .then((data) => {
      console.log(data);
      const json = data.json();
      return json;
    });
  }
}

function runPolling(generator = pollForWeatherInfo()) {
  const poll = generator.next();
  poll.value
    .then((data) => {
      if (!data.tempurature) {
        runPolling(generator);
      } else {
        console.log(data);
      }
    });
}

runPolling();
