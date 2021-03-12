/* eslint-disable linebreak-style */
import { Bowman, Swordsman } from '../class';

test('damage', () => {
  function test() {
    const bowman = new Bowman('Bowman');
    bowman.damage(1000);
    return bowman.levelUp();
  }
  const expected = new Error('Нельзя повысить уровень погибшего');
  expect(test()).toEqual(expected);
});
test('damage1', () => {
  function test() {
    const swordsman = new Swordsman('Swordsman');
    swordsman.damage(15);
    return swordsman;
  }
  const expected = new Swordsman('Swordsman');
  expect(test()).toEqual(expected);
});
