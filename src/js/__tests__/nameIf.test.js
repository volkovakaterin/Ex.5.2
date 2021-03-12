/* eslint-disable linebreak-style */
/* eslint-disable no-new */
import { Bowman } from '../class';

test('nameIf', () => {
  expect(() => {
    new Bowman('B');
  }).toThrow(Error);
});
test('nameIf1', () => {
  expect(() => {
    new Bowman('Bowman78910');
  }).toThrow(Error);
});
