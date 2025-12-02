export class CounterController {
    increaseBtn = null;
    decreaseBtn = null;
    resetBtn = null;
    counterElement = 0;
    model = null;

    constructor(model) {
        this.increaseBtn = document.getElementById('increase-button');
        this.decreaseBtn = document.getElementById('decrease-button');
        this.resetBtn = document.getElementById('reset-button');

        this.counterElement = document.getElementById('counter-value');
        
        this.model = model;

        this.increaseBtn.addEventListener('click', () => {
            this.model.increase();
        });

        this.decreaseBtn.addEventListener('click', () => {
            this.model.decrease();
        });

        this.resetBtn.addEventListener('click', () => {
            this.model.reset();
        });

        this.counterElement.textContent = model.value;

        model.subscribe(model.eventName, (value) => {
            this.counterElement.textContent = value;
        })
    }
}