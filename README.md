# ember-cli-htmlbars-minifier

[![Build Status](https://travis-ci.org/BBVAEngineering/ember-cli-htmlbars-minifier.svg?branch=master)](https://travis-ci.org/BBVAEngineering/ember-cli-htmlbars-minifier)
[![GitHub version](https://badge.fury.io/gh/BBVAEngineering%2Fember-cli-htmlbars-minifier.svg)](https://badge.fury.io/gh/BBVAEngineering%2Fember-cli-htmlbars-minifier)
[![NPM version](https://badge.fury.io/js/ember-cli-htmlbars-minifier.svg)](https://badge.fury.io/js/ember-cli-htmlbars-minifier)
[![Dependency Status](https://david-dm.org/BBVAEngineering/ember-cli-htmlbars-minifier.svg)](https://david-dm.org/BBVAEngineering/ember-cli-htmlbars-minifier)
[![codecov](https://codecov.io/gh/BBVAEngineering/ember-cli-htmlbars-minifier/branch/master/graph/badge.svg)](https://codecov.io/gh/BBVAEngineering/ember-cli-htmlbars-minifier)
[![Ember Observer Score](https://emberobserver.com/badges/ember-cli-htmlbars-minifier.svg)](https://emberobserver.com/addons/ember-cli-htmlbars-minifier)

## Information

[![NPM](https://nodei.co/npm/ember-cli-htmlbars-minifier.png?downloads=true&downloadRank=true)](https://nodei.co/npm/ember-cli-htmlbars-minifier/)

Removes all whitespace in htmlbars templates.

## Install in ember-cli application

In your application's directory:
```
npm install ember-cli-htmlbars-minifier --save-dev
```

## Configuration

You can choose not to remove certain kinds of whitespace using config options that you can add to your `ember-cli-build.js`. If not specified, they *default* to **true.**

```
"htmlbarsMinifier": {
    stripIndentation:       true,
    removeTrailingSpaces:   true,
    removeSpacesAroundTags: true,
    stripNewlines:          true,
    coalesceSpaces:         true
}
```

Config Option | Description |
--- | --- |
|stripIndentation        | Remove any consecutive sets of tabs or spaces from the beginning of each line.
|removeTrailingSpaces    | Remove any whitespace that may be at the end of each line.
|removeSpacesAroundTags  | Remove any whitespace that occurs before or after an HTML tag or Handlebars tag
|stripNewlines           | Remove all newlines from the template (except those that are inside an open tag, which will be ignored by the HTMLBars/Glimmer parser anyway).
|coalesceSpaces          | Replace any runs of multiple whitespaces with a single space.

## Contributing

We're thankful to the community for contributing any improvements.

Do not forget to follow our [eslint](https://github.com/BBVAEngineering/javascript/tree/master/eslint-config-bbva) rules and make test for the new functionalities/fixes.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/BBVAEngineering/ember-cli-htmlbars-minifier/tags).


## Authors

See the list of [contributors](https://github.com/BBVAEngineering/ember-cli-htmlbars-minifier/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
