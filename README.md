# 📭Empty Checker

[![License][license-badge]][license-url] [![Travis CI][travis-badge]][travis-url] [![Coverage Status][coverage-badge]][coverage-url] [![Commitizen][commitizen-badge]][commitizen-url]

📭`js-is-empty` makes your empty checks for you. We have empty checks for

- `Array`
- `Object`
- `String`

## Installation

`js-is-empty` is available on npm/yarn:

```bash
$ npm install @codevor/js-is-empty --save
$ yarn add @codevor/js-is-empty
```

## Usage

### With ES6/import

```js
import { isArrayEmpty, isObjectEmpty } from '@codevor/js-is-empty';

const myEmptyArray = [];
const person = { name: 'John Doe', age: 32 };

isArrayEmpty(myEmptyArray); // => true
isObjectEmpty(person); // => false
```

### With require

```js
const jsIsEmpty = require('@codevor/js-is-empty');

const isArrayEmpty = jsIsEmpty.isArrayEmpty;
const isObjectEmpty = jsIsEmpty.isObjectEmpty;

const myEmptyArray = [];
const person = { name: 'John Doe', age: 32 };

isArrayEmpty(myEmptyArray); // => true
isObjectEmpty(person); // => false
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Changelog

This project adheres to [Semantic Versioning](https://semver.org/). Every release, along with the migration instructions, is documented on the Github [Releases](https://github.com/codevor/js-is-empty/releases) page.

## Bugs and Sugestions

Report bugs or do suggestions using the [issues](https://github.com/codevor/js-is-empty/issues).

## License

[MIT License](LICENSE) © [Codevor](https://github.com/codevor)

[license-badge]: https://img.shields.io/github/license/codevor/js-is-empty.svg
[license-url]: https://opensource.org/licenses/MIT
[coverage-badge]: https://coveralls.io/repos/github/codevor/js-is-empty/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/codevor/js-is-empty?branch=master
[travis-badge]: https://travis-ci.org/codevor/js-is-empty.svg?branch=master
[travis-url]: https://travis-ci.org/codevor/js-is-empty
[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
