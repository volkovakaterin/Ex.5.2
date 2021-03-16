/* eslint-disable linebreak-style */
/* eslint-disable no-new */
import { Daemon, Undead } from '../class';

test('typeIf', () => {
  expect(() => {
    new Daemon('Daemon');
  }).toThrow(Error);
});
test('typeIf1', () => {
  expect(() => {
    new Undead('Undead');
  }).toThrow(Error);
});
