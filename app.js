'use strict'

function getDiceNumber(typeDice = 'd12') {
    const diceNumber = ['d4', 'd6', 'd8', 'd10', 'd12', 'd16', 'd20'];
    let maxValueDice = '';
    if (!diceNumber.find(el => el === typeDice)) {
        return `Не вверно введён тип dice`;
    }
    for (let el of typeDice) {
        if (!isNaN(Number(parseInt(el)))) {
            maxValueDice += el
        }
    }
    return Math.floor(Math.random() * (maxValueDice - 1 + 1)) + 1;
}

console.log(getDiceNumber('d10'));
console.log(getDiceNumber('d12'));
console.log(getDiceNumber('d15'));
console.log(getDiceNumber('d16'));
console.log(getDiceNumber('d4'));
console.log(getDiceNumber('d11'));
