var HtmlbarsMinifier = require('./lib/htmlbars-minifier');

module.exports = {
    name: 'ember-cli-htmlbars-minifier',

    setupPreprocessorRegistry: function(type, registry) {
        registry.add('template', {
            name: 'ember-cli-htmlbars-minifier',
            ext: 'hbs',
            toTree: function(tree) {
                return HtmlbarsMinifier(tree);
            }
        });
    }
};
