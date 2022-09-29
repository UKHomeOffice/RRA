'use strict';

const path = require('path');

const pagesPath = page => path.resolve(__dirname,
  `./apps/rra/acceptance/pages/${page}`);

module.exports = {
  name: 'rra',
  include: {
    firstPage: pagesPath('first-step.js'),
    secondPage: pagesPath('second-step.js'),
    thirdPage: pagesPath('third-step.js')
  }
};
