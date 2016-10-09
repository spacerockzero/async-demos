// A demo for async programming in JavaScript
// Solving for: https://github.com/fs-webdev/skill-building-program/blob/master/badges-active/javascript/_micro_async-programming.md


/* DOM RENDERING FUNCTIONS */

// returns an element for one show
function makeShowEl(showData) {
  const contentEl = document.createElement('div');
  contentEl.classList.add('show');
  contentEl.innerHTML = `
    <h2>${showData.name}</h2>
    <p>${showData.summary}</p>
  `;
  return contentEl;
}

// returns all show elements
function makeAllShowContent(allShowData) {
  return allShowData.map(show => makeShowEl(show));
}

// returns document fragment, ready to append to page
function getFrag(allShowData) {
  const allShowContent = makeAllShowContent(allShowData);
  const frag = document.createDocumentFragment();
  allShowContent.forEach((showEl) => {
    frag.appendChild(showEl);
  });
  return frag;
}

// prints document fragment to page
function printData(allShowData) {
  const frag = getFrag(allShowData);
  document.body.appendChild(frag);
}


/* DATA FETCHING FUNCTIONS */

// URLs to shows
const showURLs = [
  'http://api.tvmaze.com/shows/1871',
  'http://api.tvmaze.com/shows/522',
  'http://api.tvmaze.com/shows/1819',
  'http://api.tvmaze.com/shows/1788',
  'http://api.tvmaze.com/shows/263',
];

// start fetches for show data
const showPromises = showURLs.map(url => fetch(url));

// resolve fetch promises, extract json, return it to array, then print data to the page
Promise.all(showPromises)
  .then((values) => {
    const promises = [];
    values.forEach((value) => {
      promises.push(value.json());
    });
    return Promise.all(promises);
  })
  .then(showsArr => printData(showsArr));
