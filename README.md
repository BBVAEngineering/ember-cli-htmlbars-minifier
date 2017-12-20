# ember-cli-htmlbars-minifier

Removes all whitespace in htmlbars templates.

## Installation
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
