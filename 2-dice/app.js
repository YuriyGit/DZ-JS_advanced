'use strict';

function getDiceNumber(typeDice = 'd12') {
    let maxValueDice = 0;
    const diceNumber = {
        d4: '4',
        d6: '6',
        d8: '8',
        d10: '10',
        d12: '12',
        d16: '16',
        d20: '20',
    };

    if (!diceNumber[typeDice]) {
        console.log('Не вверно введён тип dice');
        return null
    }
    maxValueDice = Number(diceNumber[typeDice]);
    console.log(Math.floor(Math.random() * maxValueDice) + 1);
}

getDiceNumber('d10')
getDiceNumber('d12')
getDiceNumber('d15')
getDiceNumber('d16')
getDiceNumber('d4')
getDiceNumber(12)

