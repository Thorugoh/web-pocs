export class  ExtensionItemController {
    #model = null;
    #view = null;

    constructor(model, view) {
        this.#model = model;
        this.#view = view;

        this.#view.bindToggle(this.handleToggle.bind(this))
    }

    handleToggle() {
        const newStatus = this.#model.toggleStatus();
        this.#view.updateStatus(newStatus)
    }
}