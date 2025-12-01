export class CounterModel {
    #value = 0

    constructor(value) {
        this.#value = value
    }

    get value() {
        return this.#value
    }

    increase() {
        this.#value += 1
    }

    decrease() {
        this.#value -= 1
    }

    reset() {
        this.#value = 0
    }
}