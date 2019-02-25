'use strict';

const assert = require('assert');

const HTMLBarsMinifier = require('../lib/htmlbars-minifier');

describe('htmlbars-minifier', () => {
	it('implements "cacheKeyProcessString()"', () => {
		const pluginInstance = new HTMLBarsMinifier('foo');

		assert.ok(typeof pluginInstance.cacheKeyProcessString === 'function', 'cacheKeyProcessString is a function');
		assert.strictEqual(pluginInstance.cacheKeyProcessString('a', 'b'), '0ee7567326a13036b9ad1b853bad44d5', 'returns a string');
	});

	it('always generates an instance of HTMLBarsMinifier', () => {
		const result = HTMLBarsMinifier('foo');

		assert.ok(result instanceof HTMLBarsMinifier);
	});
});
