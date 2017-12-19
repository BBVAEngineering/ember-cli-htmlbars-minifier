var HtmlbarsMinifier = require('./lib/htmlbars-minifier');

module.exports = {
	name: 'ember-cli-htmlbars-minifier',

	initializeOptions: function(appOptions) {
		var defaultOptions = {
			stripIndentation: true,
			removeTrailingSpaces: true,
			coalesceSpaces: true,
			removeSpacesAroundTags: true,
			stripNewlines: true,
		};

		this.options = appOptions['ember-cli-htmlbars-minifier'] || {};
		for (var option in defaultOptions) {
			if (!this.options.hasOwnProperty(option)) {
				this.options[option] = defaultOptions[option];
			}
		}
	},
	included: function(app) {
		this._super.included.apply(this, arguments);

		this.initializeOptions(app.options);
	},
	setupPreprocessorRegistry: function(type, registry) {
		var self = this;

		registry.add('template', {
			name: 'ember-cli-htmlbars-minifier',
			ext: 'hbs',
			toTree: function(tree) {
				return HtmlbarsMinifier(tree, this.options);
			}
		});
	}
};
