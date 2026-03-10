# Text Editor

A lightweight browser-based text editor built with pure HTML, CSS, and JavaScript.
This project was created as a simple and portable writing tool for quick note-taking and basic text formatting directly in the browser. It focuses on simplicity, fast loading, and offline usability without relying on frameworks, libraries, or build tools.

Whether you want to jot down notes, experiment with rich-text editing, or explore how `contenteditable` works under the hood, this project keeps things straightforward and easy to understand.

---

⚠️ Note: This is a lightweight editor intended for learning, personal use, and experimentation. It is not designed to compete with full-featured word processors.


---

## Features

* Rich-text editing with `contenteditable`
* Text formatting options:
  * **Bold**
  * *Italic*
  * Underline
  * Mark
  * Code
  * Supscript
  * Subscript
  * Strikethrough
* Text alignment options:
  * Left
  * Right
  * Center
  * Justify
* Font Family
* Clear editor contents
* Remove formatting from selected text
* Custom backspace key
* Live word counter
* Live character counter
* Separate toolbars for formatting and editor controls
* Export content as a standalone HTML file
* Fully client-side and works offline

---

## Usage

### Option 1 — Quick Use (Recommended)

1. Download `dist/text-editor.html`
2. Open in any browser
3. Start coding immediately

* Works offline. 
* No installation required.

---

### Option 2 — Development Mode

1. Clone the repository
2. Open:

```
  src/index.html
```

3. Edit files in `src/`


Recommended for learning and development.


---

## Project Structure

```
text-editor/
│
├── index.html              # Entry / landing page (GitHub Pages)
│
├── src/                    # Development source code
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── dist/                   # Standalone (for users)
│   └── text-editor.html  # Single-file app
│
├── README.md
├── LICENSE
└── .gitignore
```

---

## Project Overview

This project uses two modes:

### Development Mode

* Modular structure
* Easy to edit and experiment with
* Easy to extend

### Standalone Mode

* Single HTML file
* Fully portable
* Works offline

---

## Technology Stack

* HTML5
* CSS3
* Vanilla JavaScript

---

## Limitations

* Not a full Word Processor
* No advanced features
* Browser-dependent behavior

---

## Live Demo

Try it here:
https://akp-labs.github.io/text-editor

---

## Contributing

* Open for learning and experimentation
* Bugs may exist
* Improvements are welcome

---

## License

Open-source for educational and experimental use.