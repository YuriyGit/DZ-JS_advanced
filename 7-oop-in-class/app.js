"use strict"

class Character {
    race;
    name;
    language;

    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }

    isSpeak() {
        console.log(`Язык:${this.language}`)
        console.log(`Имя:${this.name}`)
    }
}

class Orc extends Character {
    weapon = 'mace';

    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.weapon = weapon;
    }

    hit() {
        console.log(`Нанесён удар ${this.weapon}`)
    }

    isSpeak() {
        console.log(`Язык:${this.language}`)
        console.log(`Я Орк! моё имя ${this.name}`)
    }
}

class Elf extends Character {
    spell = 'sleepy charm';

    constructor(race, name, language, spell) {
        super(race, name, language);
        this.spell = spell;
    }

    createSpell() {
        console.log(`выбрал заклинание ${this.spell}`)
    }

    isSpeak() {
        console.log(`Язык:${this.language}`)
        console.log(`Я Эльф! моё имя ${this.name}`)
    }
}
