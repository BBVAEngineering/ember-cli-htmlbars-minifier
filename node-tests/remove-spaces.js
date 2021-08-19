'use strict';

const assert = require('assert');
const HTMLBarsMinifier = require('../lib/htmlbars-minifier');

const minifier = new HTMLBarsMinifier('foo', {
  removeSpacesAroundTags: true,
});

describe('removeSpacesAroundTags', () => {
  it('should escape special chars', () => {
    const input = '{{#foo}}{{/foo}}';

    assert.strictEqual(minifier.processString(input), '{{~#foo}}{{~/foo}}');
  });

  it('should remove whitespaces after a DOM element', () => {
    const input = '<a>    foo';

    assert.strictEqual(minifier.processString(input), '<a>foo');
  });

  it('should remove whitespaces before a DOM element', () => {
    const input = 'foo    <a>';

    assert.strictEqual(minifier.processString(input), 'foo<a>');
  });

  it('should remove whitespaces between an HTMLBars node and a DOM element', () => {
    const input = '{{foo}}    <a>';

    assert.strictEqual(minifier.processString(input), '{{foo}}<a>');
  });

  it('should remove whitespaces between a DOM element and an HTMLBars node', () => {
    const input = '<a>    {{foo}}';

    assert.strictEqual(minifier.processString(input), '<a>{{foo}}');
  });
});
