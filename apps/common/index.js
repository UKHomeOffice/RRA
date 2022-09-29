'use strict';

module.exports = {
  name: 'common',
  pages: {
    '/accessibility': 'accessibility',
    '/cookies': 'cookies'
  },
  steps: {
    '/start': {
      template: 'rra',
      next: '/verify/who-do-you-work-for'
    }
  }
};
