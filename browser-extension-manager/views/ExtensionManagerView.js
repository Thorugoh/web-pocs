export class ExtensionManagerView {
    #filterAllBtn = null;
    #filterActiveBtn = null;
    #filterInactiveBtn = null;
    #listContainer = null;

    constructor() {
        this.#filterAllBtn = document.getElementById("filter-all");
        this.#filterActiveBtn = document.getElementById("filter-active")
        this.#filterInactiveBtn = document.getElementById("filter-inactive")
        this.#listContainer = document.getElementById('extensions-list');


        console.log({
            filterAll: this.#filterActiveBtn
        });
        
    }

    get listContainer () {
        return this.#listContainer
    }

    appendToListContainer(element) {
        console.log({
            list: this.#listContainer,
            element
        });
        
        this.#listContainer.appendChild(element)
    }

    clearList() {
        this.#listContainer.textContent = ''
    }
}