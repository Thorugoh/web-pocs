import { ExtensionItem } from "./extension-item.js";
import { loadJsonFile } from "./utils.js";

class App {
    filteredData = [];
    data = [];

    async init() {
        this.data = await loadJsonFile('../data.json');
        this.filteredData = this.data || [];
        console.log({data: this.data, f: this.filteredData});
        
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

    filterAll() {
        this.toggleSelectedButton('filter-all');

        const list = document.querySelector('#extensions-list');
        list.innerHTML = '';

        this.data.forEach(ext => {    
            new ExtensionItem(ext.name, ext.isActive, ext.logo);
        });
    }

    filterActive(){
        this.toggleSelectedButton('filter-active');

        const filterActiveBtn = document.querySelector('#filter-active');
        filterActiveBtn.classList.remove('unselected-chip');
        filterActiveBtn.classList.add('selected-chip');

        const list = document.querySelector('#extensions-list');
        list.innerHTML = '';
        
        this.data.filter(ext => ext.isActive).forEach(ext => {    
            new ExtensionItem(ext.name, ext.isActive, ext.logo);
        });
    }

    filterInactive(){
        this.toggleSelectedButton('filter-inactive');
        
        const list = document.querySelector('#extensions-list');
        list.innerHTML = '';
        
        this.data.filter(ext => !ext.isActive).forEach(ext => {    
            new ExtensionItem(ext.name, ext.isActive, ext.logo);
        });
    }
}

const app = new App();
app.init();
