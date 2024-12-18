
const personas = [
    { name: 'Sarah', age: 50 },
    { name: 'César', age: 52 },
    { name: 'Anne', age: 10 },
    { name: 'Sienna', age: 5 }
]


personas.some((persona) => {
    return persona.age > 18
})