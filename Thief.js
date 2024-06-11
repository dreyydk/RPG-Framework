const Character = require("./Character");

class Thief extends Character {
  constructor(name, health, attackPower, defensePower) {
    super(name, health, attackPower, defensePower);
  }
  attack(target) {
    console.log(`${this.name} attacks ${target.name}!`);
    let damage = (this.attackPower - target.defensePower) * 2;
    target.health -= damage;
    if (damage > 0) {
      console.log(`${target.name} has been hit! New HP: ${target.health}!`);
    } else {
      console.log(`${target.name} didn't take damage!`);
    }
  }
}

module.exports = Thief;
