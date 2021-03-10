/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-operators */
class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    if (typeof this.name !== 'string' || this.name.length < 2 || this.name.length > 10) {
      throw new Error('Ошибка');
    }
    this.type = type;
    if (this.type !== 'Bowman' && this.type !== 'Swordsman' && this.type !== 'Magician' && this.type !== 'Daemon' && this.type !== 'Undead' && this.type !== 'Zombie') {
      throw new Error('Ошибка');
    }
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  // eslint-disable-next-line consistent-return
  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack += (this.attack / 100 * 25);
      this.defence += (this.defence / 100 * 25);
      this.health = 100;
    } else { return new Error('Нельзя повысить уровень погибшего'); }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

export class Bowman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, 'Bowman', 0, 1, 25, 25);
  }
}
export class Swordsman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, 'Swordsman', -5, 1, 40, 10);
  }
}
export class Magician extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, 'Magician', 100, 1, 10, 40);
  }
}
export class Daemon extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, 'Daemon', 100, 1, 10, 40);
  }
}
export class Undead extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, 'Undead', 100, 1, 25, 25);
  }
}
export class Zombie extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, 'Zombie', 100, 1, 40, 10);
  }
}
