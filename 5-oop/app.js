'use strict'
const Character = function (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Character.prototype.isSpeak = function () {
    console.log(`Язык:${this.language}`)
    console.log(`Имя:${this.name}`)
}


const orc = new Character('orcs', 'Azog', 'black speech')
orc.weapon = 'mace';

orc.__proto__.hit = function () {
    console.log(`Нанесён удар`)
};

const elf = new Character('elfs', 'Celeborn','Quenya')
elf.__proto__.spell = function(){
    console.log(`выбрал заклинание`);
};

elf.__proto__.createSpell = function(){
    console.log(`использовал заклинание`);
};



