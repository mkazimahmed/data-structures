let instance: Counter;


class Counter {
    count: number = 0

    constructor() {
        if(instance) {
            throw new Error('Instance can be created only once')
        }

        instance = this
    }

    getInstance() {
        return instance
    }

    increment() {
        this.count++
    }

    decrement() {
        this.count++
    }

    get getCount() {
        return this.count
    }
}

const singletonCounter = Object.freeze(new Counter())

export default singletonCounter;