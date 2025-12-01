# Vanilla JS MVC Counter

A simple, modular Counter application built with Vanilla JavaScript to demonstrate the **Model-View-Controller (MVC)** architectural pattern without any frameworks.

## 📂 Project Structure

The project is organized using ES Modules to enforce separation of concerns:

* **`main.js`**: The entry point. It handles dependency injection, wiring the Model to the Controller.
* **`counter-model.js` (Model)**: Manages the application state (business logic). It knows nothing about the HTML.
* **`counter-controller.js` (Controller)**: Handles user input (DOM events) and commands the Model to update.
* **`index.html` (View)**: The passive interface structure.

## 🏗️ Architecture: How it Works

This project strictly adheres to MVC principles:

1.  **Model (`CounterModel`)**:
    * Holds the numeric value.
    * Contains methods like `increase()`, `decrease()`, and `reset()`.
    * *Crucially:* It does not manipulate the DOM.

2.  **View (HTML)**:
    * Displays the current state.
    * Sends user interactions (clicks) to the Controller via event listeners.

3.  **Controller (`CounterController`)**:
    * Acts as the intermediary.
    * **In:** Listens for clicks on buttons.
    * **Process:** Calls the appropriate method on the Model.
    * **Out:** Manually updates the View to reflect the new Model state.

## 🚀 How to Run

Since this project uses ES Modules (`import`/`export`), you cannot simply open `index.html` directly from the file system due to CORS security policies in browsers.

1.  Use a local server (e.g., generic generic `http-server`, VS Code "Live Server" extension, or Python's `http.server`).
2.  Open the local address in your browser.