import { isObject, isArray } from '@codevor/js-is-type';

import isArrayEmpty from './is-array-empty';

const isObjectEmpty = value =>
  isObject(value) && !isArray(value) && isArrayEmpty(Object.keys(value));

export default isObjectEmpty;
