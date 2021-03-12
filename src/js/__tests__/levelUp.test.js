/* eslint-disable linebreak-style */
import { Bowman, Swordsman, Magician } from '../class';

test('levelUp', () => {
  const bowman = new Bowman('Bowman');
  const Bowman1 = new Error('Нельзя повысить уровень погибшего');
  expect(bowman.levelUp()).toEqual(Bowman1);
});
test('levelUp1', () => {
  const swordsman = new Swordsman('Swordsman');
  const Swordsman1 = new Error('Нельзя повысить уровень погибшего');
  expect(swordsman.levelUp()).toEqual(Swordsman1);
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
