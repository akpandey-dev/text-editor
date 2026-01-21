# Text Editor

A lightweight browser-based text editor built with pure HTML, CSS, and JavaScript.

This project was created as a simple and portable writing tool for quick note-taking and basic text formatting directly in the browser. It focuses on simplicity, fast loading, and offline usability without relying on frameworks, libraries, or build tools.

Whether you want to jot down notes, experiment with rich-text editing, or explore how `contenteditable` works under the hood, this project keeps things straightforward and easy to understand.

> ⚠️ Note: This is a lightweight editor intended for learning, personal use, and experimentation. It is not designed to compete with full-featured word processors.

---

## Features

* Rich-text editing with `contenteditable`
* Text formatting options:
  * **Bold**
  * *Italic*
  * Underline
  * Mark
* Clear editor contents
* Remove formatting from selected text
* Custom backspace key
* Live word counter
* Live character counter
* Separate toolbars for formatting and editor controls
* Export content as a standalone HTML file
* Fully client-side and works offline

---

## Project Structure

### Modular Version

The modular version separates the project into multiple files:

* `index.html`
* `style.css`
* `script.js`

Benefits:

* Easier maintenance
* Cleaner code organization
* Simpler debugging
* Better scalability for future features

---

### Standalone Version

The standalone version packages everything into a single HTML file.

Benefits:

* Easy to share
* No setup required
* Convenient for quick testing
* Portable and self-contained

---

## Usage

No installation is required.

1. Open a build from the `text-editor` directory
2. Launch the HTML file in any modern browser
3. Start typing and formatting your content

---

## Technology Stack

* HTML5
* CSS3
* Vanilla JavaScript
* DOM APIs
* Selection API

---

## Goals

This project aims to demonstrate how a functional text editor can be built using only browser-native technologies while keeping the codebase small and easy to understand.

---

## License

This project is open for learning, modification, and experimentation.
