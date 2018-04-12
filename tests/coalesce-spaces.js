'use strict';

const assert = require('assert');
const HTMLBarsMinifier = require('../lib/htmlbars-minifier');

const minifier = new HTMLBarsMinifier('foo', {
	coalesceSpaces: true
});

describe('coalesceSpaces', () => {
	it('should coalesce consecutive spaces', () => {
		const input = '    ';

		assert.equal(
			minifier.processString(input),
			' '
		);
	});

	it('should coalesce consecutive spaces inside a DOM element', () => {
		const input = '<b>    </b>';

		assert.equal(
			minifier.processString(input),
			'<b> </b>'
		);
	});

	it('should coalesce consecutive spaces around a DOM element', () => {
		const input = '    <b></b>    ';

		assert.equal(
			minifier.processString(input),
			' <b></b> '
		);
	});
});
