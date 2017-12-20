const HtmlbarsMinifier = require('./lib/htmlbars-minifier');

const DEFAULTS = {
	stripIndentation: true,
	removeTrailingSpaces: true,
	coalesceSpaces: true,
	removeSpacesAroundTags: true,
	stripNewlines: true,
};

module.exports = {
	name: 'ember-cli-htmlbars-minifier',

	_getOptions(projectConfig) {
		return Object.assign({}, DEFAULTS, projectConfig['htmlbarsMinifier'] || {});
	},

	setupPreprocessorRegistry(type, registry) {
		const self = this;
		const projectConfig = this.project.config();
		const options = this._getOptions(projectConfig);

		registry.add('template', {
			name: 'ember-cli-htmlbars-minifier',
			ext: 'hbs',
			toTree: (tree) => HtmlbarsMinifier(tree, options)
		});
	}
};
