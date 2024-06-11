const Character = require("./Character");
const Thief = require("./Thief");
const Mage = require("./Mage");
const Warrior = require("./Warrior");

function line() {
  console.log("-------------------------------------------------");
}

// Thief test.

line();
console.log(`Starting Thief class test...`);

const jinwoo = new Thief("Sung Jin-Woo", 100, 20, 10);
const antares = new Character("Antares", 100, 20, 10);

jinwoo.attack(antares);

// Mage test.

line();
console.log(`Starting Mage class test...`);

const jongin = new Mage("Choi Jong-In", 100, 20, 10, 20);
const querehsha = new Character("Querehsha", 100, 20, 10);

jongin.attack(querehsha);

// Warrior test.

line();
console.log(`Starting Warrior class test...`);

const igris = new Warrior("Igris", 100, 20, 10, 10, "attack");
const beru = new Character("Beru", 100, 20, 10);

igris.attack(beru);
igris.changeStance();
igris.attack(beru);
beru.attack(igris);

line();
