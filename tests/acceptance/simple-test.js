import { module, test } from 'qunit';
import { visit, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | Simple Acceptance Test', (hooks) => {
  setupApplicationTest(hooks);

  module('Option `stripIndentation`', () => {
    test('it should remove intentation', async function (assert) {
      await visit('/');

      const expected = 'foo';
      const element = await find('#stripIndentation');

      assert.equal(element.innerText, expected);
    });
  });

  module('Option `removeTrailingSpaces`', () => {
    test('it should remove trailing spaces', async function (assert) {
      await visit('/');

      const expected = 'foo';
      const element = await find('#removeTrailingSpaces');

      assert.equal(element.innerText, expected);
    });
  });

  module('Option `removeSpacesAroundTags`', () => {
    test('it should apply the Handlebars whitespace control', async function (assert) {
      await visit('/');

      const expected = '<a href="foo">bar</a><a href="bar">Empty</a>';
      const element = await find('#removeSpacesAroundTags-1');

      assert.equal(element.innerHTML, expected);
    });

    test('it should remove whitespaces after a DOM element', async function (assert) {
      await visit('/');

      const expected = '<span>foo</span>';
      const element = await find('#removeSpacesAroundTags-2');

      assert.equal(element.innerHTML, expected);
    });

    test('it should remove whitespaces before a DOM element', async function (assert) {
      await visit('/');

      const expected = '<span>foo</span>';
      const element = await find('#removeSpacesAroundTags-3');

      assert.equal(element.innerHTML, expected);
    });

    test('it should remove whitespaces between an HTMLBars node and a DOM element', async function (assert) {
      await visit('/');

      const expected = 'Hello<b>World</b>';
      const element = await find('#removeSpacesAroundTags-4');

      assert.equal(element.innerHTML, expected);
    });

    test('it should remove whitespaces between a DOM element and an HTMLBars node', async function (assert) {
      await visit('/');

      const expected = '<b>Hello</b>World';
      const element = await find('#removeSpacesAroundTags-5');

      assert.equal(element.innerHTML, expected);
    });
  });

  module('Option `stripNewlines`', () => {
    test('it should join a DOM element', async function (assert) {
      await visit('/');

      const expected = '<div>foo</div>';
      const element = await find('#stripNewlines-1');

      assert.equal(element.innerHTML, expected);
    });

    test('it should join a block HTMLbars node', async function (assert) {
      await visit('/');

      const expected = '<b>Hello</b>';
      const element = await find('#stripNewlines-2');

      assert.equal(element.innerHTML, expected);
    });
  });
});
