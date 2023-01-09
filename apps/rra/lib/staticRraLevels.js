/* eslint max-len: 0 */

'use strict';

module.exports = {
  getstaticCurrentRraLevels: function () {
    return [
      { value: 'Baseline',
        label: 'Baseline'
      },
      { value: 'Practitioner',
        label: 'Practitioner'
      },
      { value: 'Expert',
        label: 'Expert'
      },
      { value: 'Guru',
        label: 'Guru'
      }
    ];
  },
  getstaticApplyRraLevels: function () {
    return [
      { value: 'Practitioner',
        label: 'Practitioner'
      },
      { value: 'Expert',
        label: 'Expert'
      },
      { value: 'Guru',
        label: 'Guru'
      }
    ];
  }
};
