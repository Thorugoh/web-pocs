export class EventEmitter {
    #events  = {};
    #callbacks = {};
    #callbackCounter = 0;

    subscribe(eventName, listener) {
        const currentCallback = this.#callbackCounter + 1

        if(!this.#events[eventName]) {
            this.#events[eventName] = [];    
        }

        this.#callbacks[currentCallback] = [listener, eventName];
        this.#events[eventName].push(currentCallback)
        this.#callbackCounter = currentCallback;

        return currentCallback;
    }

    emit(eventName, payload) {
        if(!this.#events[eventName]) return;
        this.#events[eventName].forEach(id => {
            const [callback] =  this.#callbacks[id];
            if(callback) callback(payload)
        })
    }

    unsubscribe(callbackId) {
        const [_, eventName] = this.#callbacks[callbackId]
        this.#events[eventName] = this.#events[eventName].filter((ev) => ev !== callbackId)
        delete this.#callbacks[callbackId]
    }
}