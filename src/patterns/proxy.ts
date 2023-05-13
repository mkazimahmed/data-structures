type PersonType = {
    name: string,
    age: number
}

const person = {
    name: 'Kazim',
    age: 35
}

const proxyPerson = new Proxy(person, {
    get(obj, prop) {
        return `The name is ${obj[prop]}`
    },

    set(obj, prop, newValue) {
        obj[prop] = newValue
        return true
    },
})

proxyPerson.name;
proxyPerson.age = '45'