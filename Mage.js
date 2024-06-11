const Character = require("./Character");

class Mage extends Character {
  constructor(name, health, attackPower, defensePower, magicPower) {
    super(name, health, attackPower, defensePower);
    this.magicPower = magicPower;
  }
  attack(target) {
    console.log(`${this.name} attacks ${target.name}!`);
    let damage = this.attackPower + this.magicPower - target.defensePower;
    target.health -= damage;
    if (damage > 0) {
      console.log(`${target.name} has been hit! New HP: ${target.health}!`);
    } else {
      console.log(`${target.name} didn't take damage!`);
    }
  }
}

module.exports = Mage;
