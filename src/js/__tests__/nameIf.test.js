/* eslint-disable linebreak-style */
/* eslint-disable no-new */
import { Bowman } from '../class';

test('nameIf', () => {
  expect(() => {
    new Bowman('B');
  }).toThrow(Error);
});
