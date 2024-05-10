"use strict"

class Billing {
    #amount = 1;

    calculateTotal() {
        return Number(this.#amount);
    }
}

class FixBilling extends Billing {
    #amount = 13;

    calculateTotal() {
        return Number(this.#amount);
    }
}

class HourBilling extends Billing {
    #amount = 15;
    amountOfHours = 1;

    constructor(amountOfHours) {
        super();
        this.amountOfHours = amountOfHours;
    }

    calculateTotal() {
        return Number(this.#amount) * this.amountOfHours;
    }
}

class ItemBilling extends Billing {
    #amount = 20;
    amountOfItem = 1;

    constructor(amountOfItem) {
        super();
        this.amountOfItem = amountOfItem;
    }

    calculateTotal() {
        return Number(this.#amount) * this.amountOfItem;
    }
}

const fixBilling = new FixBilling();
const hourBilling = new HourBilling(12);
const itemBilling = new ItemBilling(30);

console.log(fixBilling.calculateTotal());
console.log(hourBilling.calculateTotal());
console.log(itemBilling.calculateTotal());