'use strict';

const assert = require('assert');
const expect = require('chai').expect;
const HTMLBarsMinifier = require('../lib/htmlbars-minifier');

const minifier = new HTMLBarsMinifier('foo', {
	stripIndentation: true
});

describe('stripIndentation', () => {
	describe('from a text node', () => {
		it('should remove consecutive spaces before a text node', () => {
			const input = '    foo';

			assert.equal(
				minifier.processString(input),
				'foo'
			);
		});

		it('should remove consecutive tabs after a text node', () => {
			const input = '			foo';

			assert.equal(
				minifier.processString(input),
				'foo'
			);
		});

		it('should remove consecutive spaces and tabs after a text node', () => {
			const input = '				foo';

			assert.equal(
				minifier.processString(input),
				'foo'
			);
		});
	});

	describe('from a DOM element', () => {
		it('should remove consecutive spaces before a DOM element', () => {
			const input = '    <b>foo</b>';

			assert.equal(
				minifier.processString(input),
				'<b>foo</b>'
			);
		});

		it('should remove consecutive tabs after a DOM element', () => {
			const input = '			<b>foo</b>';

			assert.equal(
				minifier.processString(input),
				'<b>foo</b>'
			);
		});

		it('should remove consecutive spaces and tabs after a DOM element', () => {
			const input = '				<b>foo</b>';

			assert.equal(
				minifier.processString(input),
				'<b>foo</b>'
			);
		});
	});


	describe('from a HTMLBars element', () => {
		it('should remove consecutive spaces before an HTMLBars node', () => {
			const input = '    {{foo}}';

			assert.equal(
				minifier.processString(input),
				'{{foo}}'
			);
		});

		it('should remove consecutive tabs after an HTMLBars node', () => {
			const input = '			{{foo}}';

			assert.equal(
				minifier.processString(input),
				'{{foo}}'
			);
		});

		it('should remove consecutive spaces and tabs after an HTMLBars node', () => {
			const input = '				{{foo}}';

			assert.equal(
				minifier.processString(input),
				'{{foo}}'
			);
		});
	});
});
