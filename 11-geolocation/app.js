'use strict';

const geo = document.querySelector('.currentLocation')

function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            resolve,
            reject
        )
    })
}


getCurrentLocation()
    .then(location => {
        console.log(location.coords.latitude, location.coords.longitude)
        geo.innerHTML = `Текущее место положения: широта - ${location.coords.latitude} долгота - ${location.coords.longitude}`
    })
    .catch(err => console.log(err, 1));