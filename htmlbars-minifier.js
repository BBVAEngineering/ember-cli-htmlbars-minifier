var Filter = require('broccoli-filter');

function HtmlbarsMinifier(inputTree, options) {
    if (!(this instanceof HtmlbarsMinifier)) {
        return new HtmlbarsMinifier(inputTree, options);
    }
    this.options = options;

    Filter.call(this, inputTree);

    this.inputTree = inputTree;
}

HtmlbarsMinifier.prototype = Object.create(Filter.prototype);
HtmlbarsMinifier.prototype.constructor = HtmlbarsMinifier;
HtmlbarsMinifier.prototype.extensions = ['hbs'];
HtmlbarsMinifier.prototype.targetExtension = 'hbs';
HtmlbarsMinifier.prototype.processString = function (str) {
    if (this.options.removeSpacesAroundTags){
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
            .replace(/>\s+{{/g, '>{{')
    }

    if (this.options.coalesceSpaces){
        // Replaces:
        //   - ">           foo" => "> foo"
        str = str.replace(/\s{2,}/g, ' ');
    }

    if (this.options.stripIndentation){
        // Replaces:
        //   - "     foo" => "foo"
        str = str.replace(/^\s+/, '');
    }

    if (this.options.removeTrailingSpaces){
        // Replaces:
        //   - "foo     " => "foo"
        str = str.replace(/\s+$/, '');
    }

    return str;
};

module.exports = HtmlbarsMinifier;
