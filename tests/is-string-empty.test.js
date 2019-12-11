import { isStringEmpty } from '../src';

describe('isStringEmpty()', () => {
  const stringEmptyValue = '';
  const stringValue = 'This is a string';
  const numberValue = 2;
  const arrayValue = ['a', 5, true];

  test('correct empty string should be valid', () => {
    expect(isStringEmpty(stringEmptyValue)).toBeTruthy();
  });

  test('correct string, but non empty should be invalid', () => {
    expect(isStringEmpty(stringValue)).toBeFalsy();
  });

  test('numper value should be invalid', () => {
    expect(isStringEmpty(numberValue)).toBeFalsy();
  });

  test('array value should be invalid', () => {
    expect(isStringEmpty(arrayValue)).toBeFalsy();
  });
});
