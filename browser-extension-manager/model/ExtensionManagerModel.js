import { loadJsonFile } from "../scripts/utils.js";
import { ExtensionModel } from "./ExtensionModel.js";

export class ExtensionManagerModel {
    #extensions = [];

    async loadData() {
        const rawData = await loadJsonFile('../data.json');
        this.#extensions = rawData.map((data) => {
            return new ExtensionModel(
                data.name, 
                data.isActive, 
                data.description, 
                data.logo
            )
        })
    }

    getActive(){
        return this.#extensions.filter(ext => ext.isActive);
    }

    getInactive(){
        return this.#extensions.filter(ext => !ext.isActive);
    }

    getAll(){
        return this.#extensions;
    }

    remove(extensionName){
        this.extensions = this.#extensions.filter(ext => ext.name !== extensionName)
    }

    toggleStatus(extensionName) {
        const extension = this.extensions.find(ext => ext.name === extensionName)
        if(!extension) return null;
        extension.toggleStatus();
    }
}