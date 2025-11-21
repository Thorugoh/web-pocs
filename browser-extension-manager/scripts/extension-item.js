import { loadTemplate } from "./utils.js";

class ExtensionItem {
    static #templateHtml = '';
    static #templatePromise = null;

    constructor(name, isActive, icon) {
        if (ExtensionItem.#templateHtml) {
            this.render(name, isActive, icon, ExtensionItem.#templateHtml);
            return;
        }

        if (!ExtensionItem.#templatePromise) {
            ExtensionItem.#templatePromise = loadTemplate('../templates/extension-item.html')
                .then(templateHtml => {
                    ExtensionItem.#templateHtml = templateHtml;
                    return templateHtml;
                });
        }

        ExtensionItem.#templatePromise.then(templateHtml => {
            this.render(name, isActive, icon, templateHtml);
        });
    }

    render(name, isActive, icon, templateHtml) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = templateHtml;
        const tpl = wrapper.querySelector('template');

        const node = (tpl && tpl.content.firstElementChild)
        ? tpl.content.firstElementChild.cloneNode(true)
        : document.createElement('div');

        const iconEl = node.querySelector('.extension-icon');
        const nameEl = node.querySelector('.extension-name');
        const checkboxEl = node.querySelector('.switch input[type="checkbox"]');

        if (iconEl) iconEl.src = icon;
        if (nameEl) nameEl.textContent = name;
        if (checkboxEl) checkboxEl.checked = !!isActive;

        // store instance element
        this.element = node;

        const list = document.querySelector('#extensions-list');
        if (list && this.element) list.appendChild(this.element);
    }

    bindRemoveExtension(handler) {
        this.removeButton.addEventListener('click', () => {
            handler();
        });
    }

    bindToggleActive(handler) {
        this.toggleActiveButton.addEventListener('change', () => {
            handler(this.toggleActiveButton.checked);
        });
    }
}

export { ExtensionItem }