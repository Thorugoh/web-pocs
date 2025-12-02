import { EventEmitter } from "./event-emitter.js"

export class CounterModel extends EventEmitter {
    #value = 0
    #eventName = "counter-change"

    constructor(value) {
        super()
        this.#value = value
    }

    get value() {
        return this.#value
    }

    get eventName() {
        return this.#eventName
    }

    increase() {
        this.#value += 1
        this.emit(this.#eventName, this.#value)
    }

    decrease() {
        this.#value -= 1
        this.emit(this.#eventName, this.#value)
    }

    reset() {
        this.#value = 0
        this.emit(this.#eventName, this.#value)
    }
}