const Character = require("./Character");

class Warrior extends Character {
  constructor(name, health, attackPower, defensePower, shieldPower, stance) {
    super(name, health, attackPower, defensePower);
    this.shieldPower = shieldPower;
    this.stance = stance;
    if (this.stance === "defense") {
      this.defensePower += this.shieldPower;
    }
  }
  attack(target) {
    if (this.stance === "attack") {
      console.log(`${this.name} attacks ${target.name}!`);
      let damage = this.attackPower - target.defensePower;
      target.health -= damage;
      if (damage > 0) {
        console.log(`${target.name} has been hit! New HP: ${target.health}!`);
      } else {
        console.log(`${target.name} didn't take damage!`);
      }
    } else {
      console.log(`${this.name} cannot attack in defense stance!`);
    }
  }
  changeStance() {
    console.log(`Changing ${this.name}'s stance...`);
    if (this.stance === "attack") {
      this.stance = "defense";
      this.defensePower += this.shieldPower;
    } else {
      this.stance = "attack";
      this.defensePower -= this.shieldPower;
    }
  }
}

module.exports = Warrior;
