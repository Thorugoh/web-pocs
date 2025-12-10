import { ExtensionItemView } from "../views/ExtensionItemView.js";
import { ExtensionItemController } from "./ExtensionItemController.js";

export class ExtensionManagerController {
    #view = null;
    #model = null;

    #controllers = [];

    constructor(view, model) {
        this.#view = view
        this.#model = model   
    }

    async init() {
        await this.#model.loadData();

        this.renderList(this.#model.getAll());
    }

    renderList(extensions){
        this.#view.clearList();

        this.#controllers = extensions.map(async (extModel) => {
            const itemView = new ExtensionItemView(extModel, {
                onRemove: () => this.handleRemove(extModel.name)
            })

            
            this.#view.appendToListContainer(await itemView.render());

            return new ExtensionItemController(extModel, itemView);
        })
    }
}