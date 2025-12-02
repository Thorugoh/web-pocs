# Vanilla JS Observer Pattern Counter

An evolution of the Counter project, refactored to utilize the **Observer Pattern** (Pub/Sub). This architecture decouples the View update, making the interface reactive to state changes without direct manual intervention from the Controller.

## 📂 Project Structure

The project remains modular (ES Modules) but now includes an event layer:

* **`main.js`**: Entry point. Instantiates the Model and Controller, injecting dependencies.
* **`event-emitter.js`**: Base class implementing the Pub/Sub pattern (`subscribe`, `emit`, `unsubscribe`).
* **`counter-model.js` (Model)**: Extends `EventEmitter`. Manages state and **emits events** whenever data changes.
* **`counter-controller.js` (Controller)**: Listens for user clicks and **subscribes** to Model events to update the View.
* **`index.html` (View)**: The passive interface structure.

## 📡 Architecture: The Observer Pattern

The main shift here is inverting the update flow:

1.  **EventEmitter**: Acts as an "antenna." It allows objects to subscribe to named events and trigger notifications.
2.  **Reactive Model**:
    * Does not know who is listening.
    * Simply shouts "I changed!" (`emit`) whenever the value is altered.
3.  **Subscribed Controller**:
    * In the `constructor`, it says: "Notify me when the counter changes."
    * When the notification arrives, it automatically updates the HTML `textContent`.

### Data Flow

1.  **User Action** (Click) ➡️ **Controller** calls Model method.
2.  **Model** updates value ➡️ **Model** emits `'counter-change'` event.
3.  **Controller** receives event ➡️ **Controller** updates the View.

## 🚀 How to Run

Since this project uses ES Modules (`import`/`export`), you need a local server to avoid CORS blocking.

1.  Use a simple server (e.g., VS Code "Live Server" extension, npm `http-server`, or `python -m http.server`).
2.  Open the local address in your browser.