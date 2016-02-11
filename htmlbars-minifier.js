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
    str = str.replace(/{{(#|\/|else)/g, '{{~$1');
    str = str.replace(/\s{2,}/g, ' ');
    str = str.replace(/>\s*([^\s])/g, '>$1');
    str = str.replace(/([^\s])\s*</g, '$1<');
    str = str.replace(/}}\s*</g, '}}<');
    str = str.replace(/>\s*{{/g, '>{{');
    str = str.replace(/^\s*/, '');
    str = str.replace(/\s*$/, '');
    str = str.replace(/(<.+?>[^<>]*?}})(\s*)({{[^<>]*?<.+?>)/g, '$1$3');

    return str;
};

module.exports = HtmlbarsMinifier;