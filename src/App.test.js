
import { addition } from './Helper'

test('to check simple addition function 1,2', () => {
  const result = addition(1, 2)
  expect(result).toBe(3)
});

test('to check negitive addition function -1, 2', () => {
  const result = addition(-1, 2)
  expect(result).toBe(1)
});


test('to check string addition function "1", "2"', () => {
  const result = addition("1", "2")
  expect(result).toBe(3)
});