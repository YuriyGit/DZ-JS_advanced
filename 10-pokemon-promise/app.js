'use strict';

function getJson(url) {
    return fetch(url)
        .then(res => res.json())
}

getJson('https://pokeapi.co/api/v2/pokemon/ditto/')
    .then(({abilities}) => {
        const url = abilities[0].ability.url
        return getJson(url)
            .then(({effect_entries}) => {
                effect_entries.forEach(el => {
                    if (el.language.name === 'en') {
                        console.log(el.effect);
                    }
                })
            })
    })
    .catch(err => {
        throw new Error(err);
    })



