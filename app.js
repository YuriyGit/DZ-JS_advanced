'use strict'

let usersArr = [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
    {id: 1, name: 'Вася'},
]

const setIdUsersArray = new Set(usersArr.map(el => {
    return el.id
}))

function getSortedArrayOfUsers(setIdArr, sortableArray) {
   return [...setIdArr].map(id => {
        return sortableArray.find((user) => user.id === id);
    })
}

console.log(getSortedArrayOfUsers(setIdUsersArray,usersArr));