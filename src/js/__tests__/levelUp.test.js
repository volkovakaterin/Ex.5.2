/* eslint-disable linebreak-style */
import { Bowman, Swordsman } from '../class';

test('levelUp', () => {
  const bowman = new Bowman('Bowman');
  const Bowman1 = new Error('Нельзя повысить уровень погибшего');
  expect(bowman.levelUp()).toStrictEqual(Bowman1);
});
test('levelUp1', () => {
  const swordsman = new Swordsman('Swordsman');
  const Swordsman1 = undefined;
  expect(swordsman.levelUp()).toStrictEqual(Swordsman1);
});
