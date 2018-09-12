const Filter = require('broccoli-filter');

function HtmlbarsMinifier(inputTree, options) {
	if (!(this instanceof HtmlbarsMinifier)) {
		return new HtmlbarsMinifier(inputTree, options);
	}
	this.options = options || {};

	Filter.call(this, inputTree);
}

HtmlbarsMinifier.prototype = Object.create(Filter.prototype);
HtmlbarsMinifier.prototype.constructor = HtmlbarsMinifier;
HtmlbarsMinifier.prototype.extensions = ['hbs'];
HtmlbarsMinifier.prototype.targetExtension = 'hbs';
HtmlbarsMinifier.prototype.processString = function(str) {
	if (this.options.stripIndentation) {
        // Replaces:
		//   - "     foo" => "foo"
		str = str.replace(/^(\t|\s)+/mg, '');
	}

	if (this.options.removeTrailingSpaces) {
        // Replaces:
		//   - "foo     " => "foo"
		str = str.replace(/\s+$/mg, '');
	}

	if (this.options.removeSpacesAroundTags) {
		str = str
            // Replaces:
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
            .replace(/(}}\s*)[\r\n]+(?![^<]*>)/g, '$1')

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
};

module.exports = HtmlbarsMinifier;
