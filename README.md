# Text Editor

A lightweight browser-based text editor built with pure HTML, CSS, and JavaScript.
This project was created as a simple and portable writing tool for quick note-taking and basic text formatting directly in the browser. It focuses on simplicity, fast loading, and offline usability without relying on frameworks, libraries, or build tools.

Whether you want to jot down notes, experiment with rich-text editing, or explore how `contenteditable` works under the hood, this project keeps things straightforward and easy to understand.

---

⚠️ Note: This is a lightweight editor intended for learning, personal use, and experimentation. It is not designed to compete with full-featured word processors.


---

## Features

* Rich-text editing with `contenteditable`
* Formatting: Bold, Italic, Underline, Mark, Code, Superscript, Subscript, Strikethrough
* Alignment: Left, Right, Center, Justify
* Font family selection
* Clear editor, clear formatting, custom backspace and line break controls
* Live word and character counters
* Dual-toolbar interface
* Standalone HTML export
* Fully client-side and offline-capable

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
├── dist/                   # Final build (for users)
│   └── text-editor.html  # Single-file app
│
├── scripts/                # Build tools
│   └── build.py
│
├── README.md
├── LICENSE
└── .gitignore
```

---

### Build System

Run:

```
python scripts/build.py
```

This will:

* Combine HTML, CSS, and JavaScript
* Bundle everything into a single file
* Output the final build into the `dist/` directory

---

---

## Architecture Overview

This project uses two modes:

### Development Mode

* Modular structure
* Easy to edit and experiment with
* Easy to extend

### Production Mode

* Single HTML file
* Fully portable
* Works offline

---

## Technology Stack

* HTML5
* CSS3
* Vanilla JavaScript
* Python (tooling and build script only)

---

## Limitations

* Not a full Word Processor
* No advanced features
* Browser-dependent behavior

---

## Live Demo

Try it here:
https://akpandey-dev.github.io/text-editor

---

## Contributing

* Open for learning and experimentation
* Bugs and logic gaps may exist
* Improvements are welcome

---

## License

This project is open for learning, modification, and experimentation.