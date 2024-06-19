'use strict';

const promise1 = fetch('https://dummyjson.com/products/1')
const promise2 = fetch('https://dummyjson.com/products/2')
const promise3 = fetch('https://dummyjson.com/products/3')
const promise4 = fetch('https://dummyjson.com/products/4')

async function race(arrPromise) {
    return await new Promise((resolve, reject) => {

        arrPromise.forEach(promise => promise
            .then(resolve)
            .catch(reject))
    })
}

race([promise1, promise2, promise3, promise4])
    .then(result => console.log(result));
