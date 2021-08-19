'use strict';

const assert = require('assert');
const HTMLBarsMinifier = require('../lib/htmlbars-minifier');

const minifier = new HTMLBarsMinifier('foo', {
  stripIndentation: true,
  removeTrailingSpaces: true,
  stripNewlines: true,
});

describe('stripNewlines', () => {
  it('should join a DOM element', () => {
    const input = `<div>
	foo
</div>`;

    assert.strictEqual(minifier.processString(input), '<div>foo</div>');
  });

  it('should join an inline HTMLbars node', () => {
    const input = `{{foo}}
	bar`;

    assert.strictEqual(minifier.processString(input), '{{foo}}bar');
  });

  it('should join a block HTMLbars node', () => {
    const input = `{{#foo}}
	bar
{{/foo}}`;

    assert.strictEqual(minifier.processString(input), '{{#foo}}bar{{/foo}}');
  });

  it('should not join an angle brackets node', () => {
    const input = `<Foo
	@bar={{qux}}
	@fuzz=buzz
>`;
    const expected = `<Foo
@bar={{qux}}
@fuzz=buzz
>`;

    assert.strictEqual(minifier.processString(input), expected);
  });

  it('should not join an angle brackets with modifier node', () => {
    const input = `<Foo
	{{modifier 'bleepz' }}
	@bar=qux
>`;
    const expected = `<Foo
{{modifier 'bleepz' }}
@bar=qux
>`;

    assert.strictEqual(minifier.processString(input), expected);
  });
  it('should not join an angle brackets with modifier and attributes node', () => {
    const input = `<Foo
@bar={{wow}}
{{on 'foo'
  (qwe)
}}
@foo={{wow}}
>`;
    const expected = `<Foo
@bar={{wow}}
{{on 'foo'
(qwe)
}}
@foo={{wow}}
>`;

    assert.strictEqual(minifier.processString(input), expected);
  });
});
