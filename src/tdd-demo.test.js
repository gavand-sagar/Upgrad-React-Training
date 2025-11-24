// we will write test cases first
// all test cases will be failing because of no implementation.
// developers will write code to make each case pass.


// capitalize("sagar") => Sagar
import {capitalize} from './tdd-demo.js'

test('single letter s', () => {
  const result = capitalize('s')
  expect(result).toBe('S')
});

test('single cap letter S', () => {
  const result = capitalize('S')
  expect(result).toBe('S')
});


test('two letters sa', () => {
  const result = capitalize('sa')
  expect(result).toBe('Sa')
});

test('two capital letters SA', () => {
  const result = capitalize('SA')
  expect(result).toBe('Sa')
});

test('lower case word', () => {
  const result = capitalize('sagar')
  expect(result).toBe('Sagar')
});

test('upper case word', () => {
  const result = capitalize('SAGAR')
  expect(result).toBe('Sagar')
});

test('mixed case word 1', () => {
  const result = capitalize('SaGaR')
  expect(result).toBe('Sagar')
});

test('mixed case word 2', () => {
  const result = capitalize('sAgAr')
  expect(result).toBe('Sagar')
});