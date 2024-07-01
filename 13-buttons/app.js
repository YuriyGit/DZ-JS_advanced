'use strict';

const wrapper = document.querySelector('.wrapper');
const output = document.querySelector('.output');

let counter = 0;

wrapper.addEventListener('click', (e) => {
    if (!e.target.classList.contains('button')) {
        return
    }
    for (let elem of e.currentTarget.children) {
        elem.classList.remove('active')
        elem.innerHTML = 'Нажми меня'
    }

    e.target.classList.add('active')
    e.target.innerHTML = 'Нажата'

    counter += 1
    output.innerHTML = counter
})

function createButtons() {
    for (let i = 1; i <= 5; i++) {
        const button = document.createElement('button');
        button.innerHTML = 'Нажми меня';
        button.classList.add('button');
        wrapper.append(button);
    }
}

createButtons();