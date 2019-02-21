'use strict';

const assert = require('assert');
const HTMLBarsMinifier = require('../lib/htmlbars-minifier');

const minifier = new HTMLBarsMinifier('foo', {
	stripIndentation: true,
	removeTrailingSpaces: true,
	stripNewlines: true
});

describe('stripNewlines', () => {
	it('should join a DOM element', () => {
		const input =
`<div>
	foo
</div>`;

		assert.strictEqual(
			minifier.processString(input),
			'<div>foo</div>'
		);
	});

	it('should join an inline HTMLbars node', () => {
		const input =
`{{foo}}
	bar`;

		assert.strictEqual(
			minifier.processString(input),
			'{{foo}}bar'
		);
	});

	it('should join a block HTMLbars node', () => {
		const input =
`{{#foo}}
	bar
{{/foo}}`;

		assert.strictEqual(
			minifier.processString(input),
			'{{#foo}}bar{{/foo}}'
		);
	});
});
