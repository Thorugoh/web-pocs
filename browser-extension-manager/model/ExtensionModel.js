export class ExtensionModel {
    #isActive = false;
    #name = "";
    #description = "";
    #icon = "";

    constructor(name, isActive, description, icon){
        this.#isActive = isActive;
        this.#name = name;
        this.#description = description;
        this.#icon = icon;
    }

    get name() { return this.#name }
    get isActive() { return this.#isActive }
    get description() { return this.#description }
    get icon() { return this.#icon }

    toggleStatus() {
        this.#isActive = !this.#isActive
        return this.#isActive
    }
}