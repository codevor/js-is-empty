import { isString } from '@codevor/js-is-type';

const isStringEmpty = value => isString(value) && value.length === 0;

export default isStringEmpty;
