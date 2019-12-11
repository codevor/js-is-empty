import { isObjectEmpty } from '../src';

describe('isObjectEmpty()', () => {
  const objectEmptyValue = {};
  const objectValue = { age: 23, name: 'John Doe' };
  const stringValue = 'Test string';
  const arrayValue = [];

  test('correct empty object should be valid', () => {
    expect(isObjectEmpty(objectEmptyValue)).toBeTruthy();
  });

  test('correct object, but non empty should be invalid', () => {
    expect(isObjectEmpty(objectValue)).toBeFalsy();
  });

  test('string value should be invalid', () => {
    expect(isObjectEmpty(stringValue)).toBeFalsy();
  });

  test('array is kind of object but is not empty', () => {
    expect(isObjectEmpty(arrayValue)).toBeFalsy();
  });
});
