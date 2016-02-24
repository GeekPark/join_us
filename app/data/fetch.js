const $ = require('jquery');
const _ = require('lodash');
const gist = require('./gist');

let remoteData = {};

const fetch = () => {
  let counter = 0;
  return new Promise((resolve, reject) => {
    gist.forEach(val => {
      $.ajax(val.url)
        .done(data => {
          const d = JSON.parse(data);
          remoteData[val.name] = d;
          counter += 1;
          if(counter === gist.length) resolve();
          if(counter === gist.length) console.info('fetch done');
        })
        .error(reject);
    });
  });
};

const get = type => remoteData[type];

export { fetch, get };
