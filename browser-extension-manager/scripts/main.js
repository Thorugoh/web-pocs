import { ExtensionItem } from "./extension-item.js";
import { loadJsonFile } from "./utils.js";

class App {
    async init() {
        const data = await loadJsonFile('../data.json');

        data.forEach(ext => {    
            new ExtensionItem(ext.name, ext.isActive, ext.logo);
        });
    }
}

const app = new App();
app.init();
