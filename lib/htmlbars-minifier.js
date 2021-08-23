const Filter = require('broccoli-persistent-filter');
const md5Hex = require('broccoli-persistent-filter/lib/md5-hex');
const path = require('path');

class HtmlbarsMinifier extends Filter {
  constructor(inputNode, options = {}) {
    super(inputNode, {
      persist: !(options.persist === false),
      annotation: 'HtmlbarsMinifier',
    });

    this.options = Object.assign(
      {
        persist: true,
      },
      options
    );

    this.extensions = ['hbs'];
    this.targetExtension = 'hbs';
  }

  baseDir() {
    return path.join(__dirname, '..');
  }

  cacheKeyProcessString(string, relativePath) {
    return md5Hex(string + 0x00 + relativePath);
  }

  processString(str) {
    if (this.options.stripIndentation) {
      // Replaces:
      //   - "     foo" => "foo"
      str = str.replace(/^(\t|\s)+/gm, '');
    }

    if (this.options.removeTrailingSpaces) {
      // Replaces:
      //   - "foo     " => "foo"
      str = str.replace(/\s+$/gm, '');
    }

    if (this.options.removeSpacesAroundTags) {
      str = str
        // Replaces: (http://handlebarsjs.com/expressions.html#whitespace-control)
        //   - {{#foo}} => {{~#foo}}
        //   - {{/foo}} => {{~/foo}}
        .replace(/{{(#|\/|else)/g, '{{~$1')

        // Replaces:
        //   - ">           foo" => ">foo"
        .replace(/>\s+/g, '>')

        // Replaces:
        //   - "foo           <" => "foo<"
        .replace(/\s+</g, '<')

        // Replaces:
        //   - "}}      <" => "}}<"
        .replace(/}}\s+</g, '}}<')

        // Replaces:
        //   - ">      {{" => ">{{"
        .replace(/>\s+{{/g, '>{{');
    }

    if (this.options.stripNewlines) {
      str = str
        // Replaces:
        //   - "<div>
        //      foo</div>" => "<div>foo</div>"
        .replace(/(>\s*)[\r\n]+/g, '$1')

        // Replaces:
        //   - "{{#block}}
        //      foo{{/block}}" => "{{#block}}foo{{/block}}"
        //   - "{{helper}}
        //      foo" => "{{helper}}foo"
        //  This should ignore newlines inside of an opening or self-closing tag
        .replace(/(}}\s*)[\r\n]+(?!@?\w+=|[^<]*>)/g, '$1')

        // Replaces:
        //   - "<div>foo
        //      </div>" => "<div>foo</div>"
        //   - "foo
        //      </br>" => "foo</br>"
        .replace(/[\r\n]+(\s*<)/g, '$1')

        // Replaces:
        //   - "{{#block}}foo
        //      {{/block}}" => "{{#block}}foo{{/block}}"
        //   - "foo
        //      {{helper}}" => "foo{{helper}}"
        //  This should ignore newlines inside of an opening or self-closing tag
        .replace(/(?![^<]*>)[\r\n]+(\s*{{)/g, '$1');
    }

    if (this.options.coalesceSpaces) {
      // Replaces:
      //   - ">           foo" => "> foo"
      str = str.replace(/\s{2,}/g, ' ');
    }

    return str;
  }
}

module.exports = HtmlbarsMinifier;
