import { ExtensionItem } from "./extension-item.js";
import { loadJsonFile } from "./utils.js";

class App {
    filteredData = [];
    data = [];

    async init() {
        this.data = await loadJsonFile('../data.json');
        this.filteredData = this.data || [];
        console.log({data: this.data, f: this.filteredData});
        
        const filterAllBtn = document.querySelector('#filter-all');
        filterAllBtn.addEventListener('click', () => this.filterAll());

        const filterActiveBtn = document.querySelector('#filter-active');
        filterActiveBtn.addEventListener('click', () => this.filterActive());

        const filterInactiveBtn = document.querySelector('#filter-inactive');
        filterInactiveBtn.addEventListener('click', () => this.filterInactive());
        
        this.filteredData.forEach(ext => {    
            new ExtensionItem(ext.name, ext.isActive, ext.logo);
        });
    }

    filterAll() {
        const list = document.querySelector('#extensions-list');
        list.innerHTML = '';

        this.data.forEach(ext => {    
            new ExtensionItem(ext.name, ext.isActive, ext.logo);
        });
    }

    filterActive(){
        const list = document.querySelector('#extensions-list');
        list.innerHTML = '';
        
        this.data.filter(ext => ext.isActive).forEach(ext => {    
            new ExtensionItem(ext.name, ext.isActive, ext.logo);
        });
    }

     filterInactive(){
        const list = document.querySelector('#extensions-list');
        list.innerHTML = '';
        
        this.data.filter(ext => !ext.isActive).forEach(ext => {    
            new ExtensionItem(ext.name, ext.isActive, ext.logo);
        });
    }
}

const app = new App();
app.init();
