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

    get getRun() {
        return this.#run;
    }

    set run(run) {
        this.#run = run;
    }
}

/*
При создании проекта обязательно воспользуйтесь конструктором для создания частных свойств.
Геттеры и сеттеры позволяют изменять пробег без прямого доступа к личному свойству.
Информация о методе позволяет легко получить основную информацию об автомобиле.
 */

const car = new Car('fff', 'ggg','123' )

car.info()
car.run