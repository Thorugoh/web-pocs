import { loadTemplate } from "../scripts/utils";
import  { ExtensionModel } from "../model/ExtensionModel";
export class ExtensionItemView {
    static #templateHtml = ''
    #iconEl = null;
    #nameEl = null;
    #checkboxEl = null;
    #descriptionEl = null;
    #removeBtn = null
  
    model = null
    #onRemove = null;
    /**
     * 
     * @param {ExtensionModel} model 
     */
    constructor(model, { onRemove }){
        this.model = model;
        this.#onRemove = onRemove
    }

    async getTemplate() {
        if(!ExtensionItemView.#templateHtml) {
           ExtensionItemView.#templateHtml = await loadTemplate("../templates/extension-item.html")
           return ExtensionItemView.#templateHtml;
        }

        return ExtensionItemView.#templateHtml;
    }

    async render(){
        const wrapper = document.createElement('div');
        wrapper.innerHTML = await this.getTemplate();
        const tpl = wrapper.querySelector('template');

        const node = (tpl && tpl.content.firstElementChild)
            ? tpl.content.firstElementChild.cloneNode(true)
            : document.createElement('div');

        this.#iconEl = node.querySelector('.extension-icon');
        if(this.#iconEl) this.#iconEl.src = this.model.icon;

        this.#nameEl = node.querySelector('.extension-name');
        if(this.#nameEl) this.#nameEl.textContent = this.model.name

        this.#checkboxEl = node.querySelector('.switch input[type="checkbox"]');
        if(this.#checkboxEl) this.#checkboxEl.checked = this.model.isActive;

        this.#descriptionEl = node.querySelector('.extension-description');
        if(this.#descriptionEl) this.#descriptionEl.textContent = this.model.description

        this.#removeBtn = this.element.querySelector('.remove-extension-button');
       
        if(this.#removeBtn) {
            this.#removeBtn.addEventListener('click', this.#onRemove);
        }
    }

    bindToggle(handler) {
        if (this.#checkboxEl) {
            this.#checkboxEl.addEventListener('change', (event) => {
                handler(event.target.checked); 
            });
        }
    }

    updateStatus(isActive) {
        if (this.#checkboxEl) {
            this.#checkboxEl.checked = isActive;
        }
    }
}