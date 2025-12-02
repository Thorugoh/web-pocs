import { CounterModel } from './counter-model.js';
import { CounterController } from './counter-controller.js';

class Main {
    constructor() {
        const model = new CounterModel(10);
        new CounterController(model);
    }
}

new Main();