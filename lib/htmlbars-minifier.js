var Filter = require('broccoli-filter');

function HtmlbarsMinifier(inputTree) {
    if (!(this instanceof HtmlbarsMinifier)) {
        return new HtmlbarsMinifier(inputTree);
    }

    Filter.call(this, inputTree);

    this.inputTree = inputTree;
}

HtmlbarsMinifier.prototype = Object.create(Filter.prototype);
HtmlbarsMinifier.prototype.constructor = HtmlbarsMinifier;
HtmlbarsMinifier.prototype.extensions = ['hbs'];
HtmlbarsMinifier.prototype.targetExtension = 'hbs';
HtmlbarsMinifier.prototype.processString = function (str) {
    str = str
        // Replaces:
        //   - {{#foo}} => {{~#foo}}
        //   - {{/foo}} => {{~/foo}}
        .replace(/{{(#|\/|else)/g, '{{~$1')

        // Replaces:
        //   - "\n\t" => "\n"
        .replace(/\n\t+/gm, '\n')

        // Replaces:
        //   - "       " => " "
        .replace(/\s{2,}/g, ' ')

        // Replaces:
        //   - ">           foo" => ">foo"
        .replace(/>\s+/g, '>')

        // Replaces:
        //   - "foo           <" => "foo<"
        .replace(/\s+</g, '<')

        // Replaces:
        //   - "}}      " => "}}"
        .replace(/}}\s+/g, '}}')

        // Replaces:
        //   - "      {{" => "{{"
        .replace(/\s+{{/g, '{{')

        // Replaces:
        //   - "     foo" => "foo"
        .replace(/^\s+/, '')

        // Replaces:
        //   - "foo     " => "foo"
        .replace(/\s+$/, '');

    return str;
};

module.exports = HtmlbarsMinifier;
