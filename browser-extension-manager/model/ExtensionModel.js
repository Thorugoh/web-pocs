class ExtensionModel {
    #isActive = false;
    #name = "";
    #description = "";
    #icon = "";

    constructor(name, isActive, description, icon){
        this.#isActive = isActive;
        this.#name = name;
        this.#description = description;
        this.#icon = icon;
    }
}