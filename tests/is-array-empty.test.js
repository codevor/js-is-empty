import { isArrayEmpty } from '../src';

describe('isArrayEmpty()', () => {
  const arrayEmptyValue = [];
  const arrayValue = [4, true, 'test'];
  const stringValue = 'This is a string';
  const booleanValue = true;

  test('correct empty array should be valid', () => {
    expect(isArrayEmpty(arrayEmptyValue)).toBeTruthy();
  });

  test('correct array but not empty should be invalid', () => {
    expect(isArrayEmpty(arrayValue)).toBeFalsy();
  });

  test('string value should be invalid', () => {
    expect(isArrayEmpty(stringValue)).toBeFalsy();
  });

  test('boolean value should be invalid', () => {
    expect(isArrayEmpty(booleanValue)).toBeFalsy();
  });
});
