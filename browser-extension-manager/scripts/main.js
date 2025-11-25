import { ExtensionItem } from "./extension-item.js";
import { loadJsonFile } from "./utils.js";

class App {
    filteredData = [];
    extensions = [];
    data = [];

    async init() {
        this.data = await loadJsonFile('../data.json');
        
        this.extensions = this.data.map(ext => new ExtensionItem(ext.name, ext.isActive, ext.logo, { 
            onClickToggle: () => this.applyCurrentFilter(),
            onRemove: () => this.applyCurrentFilter()
        }));
        
        this.filterAllBtn = document.querySelector('#filter-all');
        this.filterAllBtn.addEventListener('click', () => this.filterAll());

        this.filterActiveBtn = document.querySelector('#filter-active');
        this.filterActiveBtn.addEventListener('click', () => this.filterActive());

        this.filterInactiveBtn = document.querySelector('#filter-inactive');
        this.filterInactiveBtn.addEventListener('click', () => this.filterInactive());

        this.filterAll();
    }

    toggleSelectedButton(selectedBtnId) {
        const buttons = [
            this.filterAllBtn,
            this.filterActiveBtn,
            this.filterInactiveBtn
        ];
        
        buttons.forEach(btn => {
            if(btn.id === selectedBtnId) {
                btn.classList.remove('unselected-chip');
                btn.classList.add('selected-chip');
            } else {
                btn.classList.remove('selected-chip');
                btn.classList.add('unselected-chip');
            }
        });
    }

    applyCurrentFilter() {
        if (this.currentFilter === 'all') this.filterAll();
        else if (this.currentFilter === 'active') this.filterActive();
        else if (this.currentFilter === 'inactive') this.filterInactive();
    }

    filterAll() {
        this.currentFilter = 'all';
        this.toggleSelectedButton('filter-all');

        const list = document.querySelector('#extensions-list');
        list.innerHTML = '';

        this.extensions?.forEach(ext => {    
            ext.render();
        });
    }

    filterActive(){
        this.currentFilter = 'active';
        this.toggleSelectedButton('filter-active');

        const list = document.querySelector('#extensions-list');
        list.innerHTML = '';
        
        this.extensions.filter(ext => ext.isActive).forEach(ext => ext.render())
    }

    filterInactive(){
        this.currentFilter = 'inactive';
        this.toggleSelectedButton('filter-inactive');
        
        const list = document.querySelector('#extensions-list');
        list.innerHTML = '';
        
        this.extensions.filter(ext => !ext.isActive).forEach(ext => ext.render())
    }
}

const app = new App();
app.init();
