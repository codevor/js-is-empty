import { isArray } from '@codevor/js-is-type';

const isArrayEmpty = value => isArray(value) && value.length === 0;

export default isArrayEmpty;
