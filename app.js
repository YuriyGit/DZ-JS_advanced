'use strict'

function getDiceNumber(typeDice = 'd12') {
    const diceNumber = ['d4', 'd6', 'd8', 'd10', 'd12', 'd16', 'd20'];
    let maxValueDice = '';
    if (!diceNumber.find(el => el === typeDice)) {
        console.log('Не вверно введён тип dice');
        return null
    }
    for (let el of typeDice) {
        if (!isNaN(Number(parseInt(el)))) {
            maxValueDice += el
        }
    }
    console.log(Math.floor(Math.random() * (maxValueDice - 1 + 1)) + 1);
}

getDiceNumber('d10')
getDiceNumber('d12')
getDiceNumber('d15')
getDiceNumber('d16')
getDiceNumber('d4')
getDiceNumber('d11')
