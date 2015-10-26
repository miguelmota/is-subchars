var test = require('tape');
var isSubchars = require('../is-subchars');

test('flowright', function (t) {
  'use strict';

  t.plan(9);

  t.equal(isSubchars(), false);
  t.equal(isSubchars([]), false);
  t.equal(isSubchars({}), false);
  t.equal(isSubchars('', NaN), false);
  t.equal(isSubchars('', ''), true);
  t.equal(isSubchars(123, `12345`), true);
  t.equal(isSubchars(`who`, `hello world`), true);
  t.equal(isSubchars(`foo`, `hello world`), false);
  t.equal(isSubchars(`I will kill you.`, `I really like you, I'll do what you said.`), true);
});
