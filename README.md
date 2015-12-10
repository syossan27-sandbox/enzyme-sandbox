# enzyme-sandbox

## Setting React

Note: Based [js-practice-swing-example](https://github.com/syossan27-sandbox/js-practice-swing-example)

`$ npm install --save-dev babel-preset-es2015 babel-preset-react`

edit package.json.

```
"scripts": {
  "build": "browserify --debug index.jsx --outfile bundle.js -t [ babelify --presets [ es2015 react ] ]"
}
```
