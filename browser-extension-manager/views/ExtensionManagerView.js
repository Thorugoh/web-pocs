export class ExtensionManagerView {
    #filterAllBtn = null;
    #filterActiveBtn = null;
    #filterInactiveBtn = null;

    constructor() {
        this.#filterAllBtn = document.getElementById("filter-all");
        this.#filterActiveBtn = document.getElementById("filter-active")
        this.#filterInactiveBtn = document.getElementById("filter-inactive")
    }
}