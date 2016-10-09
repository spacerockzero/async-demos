/* eslint no-underscore-dangle: "warn" */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));


let polls = 0;

app.get('/api/currentWeather', (request, response) => {
  console.log(polls, polls < 5);
  if (polls < 5) {
    console.log('sending...empty');
    polls += 1;
    response.send({});
  } else {
    console.log('sending...object');
    response.send({
      temperature: 25,
      sky: 'Partly cloudy',
      humid: true,
    });
    polls = 0;
  }
});

app.get('/', (request, response) => {
  response.sendFile(`${path.__currentDir}/index.html`);
});

app.listen(8000, () => {
  console.log('Node.js server started on port 8000...');
});
