/* eslint-disable linebreak-style */
import { Bowman, Swordsman } from '../class';

test('levelUp', () => {
  const Bowman1 = {
    name: 'Bowman',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 31.25,
    defence: 31.25,
  };
  expect(Bowman.levelUp()).toEqual(Bowman1);
});
test('levelUp1', () => {
  const Swordsman1 = {
    name: 'Swordsman',
    type: 'Swordsman',
    health: 0,
    level: 1,
    attak: 40,
    defence: 10,
  };
  expect(Swordsman.levelUp()).toEqual(Swordsman1);
});
