export const arrContinent = [
    'europe',
    'India',
    'africa',
    'south america',
    'north america',
    'Russia'
]

export const continentToIdx = (continent) => {
    return arrContinent.findIndex((cont) => cont.toLowerCase() === continent.toLowerCase())
}

export const idxToContinent = (idx) => {
    return (arrContinent.filter((_, index) => index === Number(idx)))[0]
}