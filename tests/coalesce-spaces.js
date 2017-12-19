'use strict';

const assert = require('assert');
const expect = require('chai').expect;
const HTMLBarsMinifier = require('../lib/htmlbars-minifier');

const minifier = new HTMLBarsMinifier('foo', {
	coalesceSpaces: true
});

describe('coalesceSpaces', () => {
	describe('from a text node', () => {
		it('should coalesce consecutive spaces', () => {
			const input = '    ';

			assert.equal(
				minifier.processString(input),
				' '
			);
		});
	});
});
