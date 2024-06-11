class Character {
  constructor(name, health, attackPower, defensePower) {
    this.name = name;
    this.health = health;
    this.attackPower = attackPower;
    this.defensePower = defensePower;
  }
  attack(target) {
    console.log(`${this.name} attacks ${target.name}!`);
    let damage = this.attackPower - target.defensePower;
    target.health -= damage;
    if (damage > 0) {
      console.log(`${target.name} has been hit! New HP: ${target.health}!`);
    } else {
      console.log(`${target.name} didn't take damage!`);
    }
  }
}

module.exports = Character;
