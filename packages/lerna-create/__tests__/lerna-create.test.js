'use strict';

const lernaCreate = require('..');
const assert = require('assert').strict;

assert.strictEqual(lernaCreate(), 'Hello from lernaCreate');
console.info('lernaCreate tests passed');
