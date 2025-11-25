import { loadTemplate } from "./utils.js";

class ExtensionItem {
    static #templateHtml = '';
    static #templatePromise = null;
    #name = '';
    #isActive = false;
    #icon = '';
    #onRemove = null;
    #onClickToggle = null;

    constructor(name, isActive, icon, { onRemove, onClickToggle } = {}) {
        this.#onRemove = onRemove;
        this.#onClickToggle = onClickToggle;
        this.#name = name;
        this.#isActive = isActive;
        this.#icon = icon;

        if (!ExtensionItem.#templatePromise) {
            ExtensionItem.#templatePromise = loadTemplate('../templates/extension-item.html')
                .then(templateHtml => {
                    ExtensionItem.#templateHtml = templateHtml;
                    return templateHtml;
                });
        }
    }

    get isActive() {
        return this.#isActive;
    }

    render() {
        if(!ExtensionItem.#templateHtml) {
            ExtensionItem.#templatePromise.then(() => this.render());
            return;
        }

        const wrapper = document.createElement('div');
        wrapper.innerHTML = ExtensionItem.#templateHtml;
        const tpl = wrapper.querySelector('template');

        const node = (tpl && tpl.content.firstElementChild)
        ? tpl.content.firstElementChild.cloneNode(true)
        : document.createElement('div');

        const iconEl = node.querySelector('.extension-icon');
        const nameEl = node.querySelector('.extension-name');
        const checkboxEl = node.querySelector('.switch input[type="checkbox"]');

        if (iconEl) iconEl.src = this.#icon;
        if (nameEl) nameEl.textContent = this.#name;
        if (checkboxEl) checkboxEl.checked = !!this.#isActive;

        // store instance element
        this.element = node;

        const list = document.querySelector('#extensions-list');
        if (list && this.element) list.appendChild(this.element);

        this.#bindRemoveExtension(() => {
            if (this.element && this.element.parentNode) {
                this.element.parentNode.removeChild(this.element);
            }
        })

        this.#bindToggleActive();
    }

    #bindRemoveExtension() {
        const removeButton = this.element.querySelector('.remove-extension-button');
        removeButton.addEventListener('click', this.#onRemove);
    }

    #onToggle = () => {
        this.#isActive = !this.#isActive;
        this.#onClickToggle?.();
    }

    #bindToggleActive() {
        const toggleActiveButton = this.element.querySelector('.switch input[type="checkbox"]');
        toggleActiveButton.addEventListener('change', this.#onToggle);
    }
}

export { ExtensionItem }