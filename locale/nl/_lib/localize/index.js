'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../../../_lib/buildLocalizeFn/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eraValues = {
  narrow: ['v.C.', 'n.C.'],
  abbreviated: ['v.Chr.', 'n.Chr.'],
  wide: ['voor Christus', 'na Christus']
};

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['K1', 'K2', 'K3', 'K4'],
  wide: ['1e kwartaal', '2e kwartaal', '3e kwartaal', '4e kwartaal']
};

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['jan.', 'feb.', 'mrt.', 'apr.', 'mei.', 'jun.', 'jul.', 'aug.', 'sep.', 'okt.', 'nov.', 'dec.'],
  wide: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december']
};

var dayValues = {
  narrow: ['Z', 'M', 'D', 'W', 'D', 'V', 'Z'],
  short: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
  abbreviated: ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat'],
  wide: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']
};

var dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'middernacht',
    noon: 'het middaguur',
    morning: '\'s ochtends',
    afternoon: '\'s middags',
    evening: '\'s avonds',
    night: '\'s nachts'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'middernacht',
    noon: 'het middaguur',
    morning: '\'s ochtends',
    afternoon: '\'s middags',
    evening: '\'s avonds',
    night: '\'s nachts'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'middernacht',
    noon: 'het middaguur',
    morning: '\'s ochtends',
    afternoon: '\'s middags',
    evening: '\'s avonds',
    night: '\'s nachts'
  }
};

function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber);
  return number + 'e';
}

var localize = {
  ordinalNumber: ordinalNumber,

  era: (0, _index2.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),

  quarter: (0, _index2.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return Number(quarter) - 1;
    }
  }),

  month: (0, _index2.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),

  day: (0, _index2.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),

  dayPeriod: (0, _index2.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide'
  })
};

exports.default = localize;
module.exports = exports['default'];