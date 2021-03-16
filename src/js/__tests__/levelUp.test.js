/* eslint-disable linebreak-style */
import { Bowman, Swordsman, Magician } from '../class';

test('levelUp', () => {
  expect(() => {
    const bowman = new Bowman('Bowman');
    bowman.levelUp();
  }).toThrow(Error);
});
test('levelUp1', () => {
  expect(() => {
    const swordsman = new Swordsman('Swordsman');
    swordsman.levelUp();
  }).toThrow(Error);
});
test('levelUp2', () => {
  function test() {
    const magician = new Magician('Magician');
    magician.levelUp();
    return magician;
  }
  const expected = {
    name: 'Magician',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12.5,
    defence: 50,
  };
  expect(test()).toEqual(expected);
});
