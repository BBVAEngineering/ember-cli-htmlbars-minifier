'use strict';

const assert = require('assert');
const expect = require('chai').expect;
const HTMLBarsMinifier = require('../lib/htmlbars-minifier');



// 	describe('stripIndentation', () => {
// 		// /{{(#|\/|else)/g
// 		it('should escape special chars', () => {
// 			const input = '{{#foo}}{{/foo}}';

// 			assert.equal(
// 				minifier.processString(input),
// 				'{{#foo}}{{/foo}}'
// 			);
// 		});

// 		// /\n\t+/gm
// 		it('should trim whitespaces from blocks', () => {
// 			const input =
// `{{#if foo}}
//   bar
// {{/if}}`;

// 			assert.equal(
// 				minifier.processString(input),
// 				'{{#if foo}}bar\n{{/if}}'
// 			);
// 		});

// 		// /\t+/gm
// 		it('should trim tabs from blocks', () => {
// 			const input =
// `{{#if foo}}
// 	bar
// {{/if}}`;

// 			assert.equal(
// 				minifier.processString(input),
// 				'{{#if foo}} bar\n{{/if}}'
// 			);
// 		});

// 		it('should not trim whitespaces from attributes', () => {
// 			const input =
// `{{foo
// 	bar=wow}}`;

// 			assert.equal(
// 				minifier.processString(input),
// 				'{{foo bar=wow}}'
// 			);
// 		});

// 		// /\s{2,}/g
// 		it('should not remove single whitespaces', () => {
// 			const input = 'foo bar';

// 			assert.equal(
// 				minifier.processString(input),
// 				'foo bar'
// 			);
// 		});

// 		it('should not remove single whitespaces', () => {
// 			const input = 'foo bar';

// 			assert.equal(
// 				minifier.processString(input),
// 				'foo bar'
// 			);
// 		});

// 		it('should remove consecutive whitespaces', () => {
// 			const input = 'foo      bar';

// 			assert.equal(
// 				minifier.processString(input),
// 				'foo bar'
// 			);
// 		});

// 		// />\s+/g
// 		// /\s+</g
// 		it('should remove all whitespaces between tags and text', () => {
// 			const input = '    <a>    foo    </a>    ';

// 			assert.equal(
// 				minifier.processString(input),
// 				'<a>foo</a>'
// 			);
// 		});

// 		// /}}\s+/g
// 		// /\s+{{/g
// 		it('should remove all whitespaces between blocks and text', () => {
// 			const input = '    {{#foo}}    bar    {{/foo}}    ';

// 			assert.equal(
// 				minifier.processString(input),
// 				'{{#foo}}bar{{/foo}}'
// 			);
// 		});
// 	});
// });
