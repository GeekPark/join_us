const $ = require('jquery');
const _ = require('lodash');

const pageData = require('./page');

// const GIST = 'https://api.github.com/gists/f1fac66eee98d3a31c49';
const GIST = `http://7jppss.com1.z0.glb.clouddn.com/job_data.json?${Math.random()}`;

let remoteData = {
  'page.json': pageData,
};

const fetch = cb => {
  return $.ajax(GIST).done( d => {
    remoteData.position = d.position;
    remoteData.jobs = d.jobs;
    cb();
  });
};

const get = type => remoteData[type];

export { fetch, get as getData };
