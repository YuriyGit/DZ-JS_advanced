'use strict'

class Car {
    #make
    #model
    #run

    constructor(make, model, run) {
        this.#make = make;
        this.#model = model;
        this.#run = run;
    }

    info() {
        console.log(`Марка авто: ${this.#make}`);
        console.log(`Модель авто: ${this.#model}`);
        console.log(`Пробег авто: ${this.#run}`);
    }

    get run() {
        return this.#run;
    }

    set run(run) {
        this.#run = run;
    }
}
