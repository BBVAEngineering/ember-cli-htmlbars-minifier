const HtmlbarsMinifier = require('./lib/htmlbars-minifier');
const packageName = require('./package').name;

const DEFAULTS = {
  stripIndentation: true,
  removeTrailingSpaces: true,
  coalesceSpaces: true,
  removeSpacesAroundTags: true,
  stripNewlines: true,
};

module.exports = {
  name: packageName,

  _getOptions(projectConfig) {
    return Object.assign({}, DEFAULTS, projectConfig.htmlbarsMinifier || {});
  },

  setupPreprocessorRegistry(type, registry) {
    const projectConfig = this.project.config();
    const options = this._getOptions(projectConfig);

    registry.add('template', {
      name: packageName,
      ext: 'hbs',
      toTree: (tree) => new HtmlbarsMinifier(tree, options),
    });
  },
};
