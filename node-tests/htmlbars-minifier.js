'use strict';

const assert = require('assert');

const HTMLBarsMinifier = require('../lib/htmlbars-minifier');

describe('htmlbars-minifier', () => {
	it('implements "cacheKeyProcessString()"', () => {
		const pluginInstance = new HTMLBarsMinifier('foo');

		assert.ok(typeof pluginInstance.cacheKeyProcessString === 'function', 'cacheKeyProcessString is a function');
		assert.strictEqual(pluginInstance.cacheKeyProcessString('a', 'b'), 'a35aea60fe097c885568babb48ee7d1e', 'returns a string');
	});

	it('always generates an instance of HTMLBarsMinifier', () => {
		const result = HTMLBarsMinifier('foo');

		assert.ok(result instanceof HTMLBarsMinifier);
	});
});
