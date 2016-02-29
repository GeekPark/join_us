const $ = require('jquery');
const _ = require('lodash');
// const GIST = 'https://api.github.com/gists/f1fac66eee98d3a31c49';
const GIST = 'data.json';

let remoteData = {};

const fetch = cb => {
  return $.ajax(GIST).done( d => {
        const files = d.files;

        for (let i in files) {
          remoteData[i] = JSON.parse(files[i].content);
        }

        cb();
      });
};

const get = type => remoteData[type];

export { fetch, get as getData };
