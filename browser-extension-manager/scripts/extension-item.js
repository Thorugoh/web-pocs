import { loadTemplate } from "./utils.js";

class ExtensionItem {
    constructor(name, isActive, icon) {
        console.log({name, isActive, icon});
        
        loadTemplate('../templates/extension-item.html').then(templateHtml => {
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
        });   
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