

const editor = document.getElementById("editor");

const toolbar = document.getElementById("toolbar-content");
const toolbarBottom = document.getElementById("toolbar-content-bottom");

const wordOutput = document.getElementById('wordCounter');
const charOutput = document.getElementById('charCounter');

function counters(){
  const text = editor.innerText.trim();
  wordOutput.value = text === "" ? 0 : text.split(/\s+/).length;
  charOutput.value = text.length;
}

counters();

editor.addEventListener('input', ()=>{
    counters();
});




toolbar.addEventListener("wheel", (e) => {
    e.preventDefault();

    toolbar.scrollLeft += e.deltaY;
});

toolbarBottom.addEventListener("wheel", (e) => {
    e.preventDefault();

    toolbarBottom.scrollLeft += e.deltaY;
});


function format(tagName) {
  const selection = window.getSelection();
  editor.focus();

  if (selection.rangeCount > 0 && !selection.isCollapsed) {
    const range = selection.getRangeAt(0);
    const selectedText = range.extractContents();

    const cleanedText = document.createElement("span");
    cleanedText.innerHTML = selectedText.textContent;

    const el = document.createElement(tagName);
    el.textContent = cleanedText.textContent;

    range.insertNode(el);
    selection.removeAllRanges();
  } else {
  const tag = document.createElement(tagName);
  tag.innerHTML = editor.innerHTML;
  editor.innerHTML = "";
  editor.appendChild(tag);
}
 }

function clearFormat(){
    document.execCommand("removeFormat", false, null);

    editor.innerHTML = editor.innerHTML
    .replace(/<(\/)?(b|i|u|s|code|mark|sup|sub|span)>/gi, '');  // Fallback safety for tags like mark
    editor.style.textAlign = "left" ;
}

function clearEditor(){
    let confirmation = confirm("Are you sure? This is not reversible.")
    if (confirmation){
      editor.innerHTML = "";
    }
}


function backSpaceFun() {
    editor.focus();
    const selection = window.getSelection();

    if (!selection.rangeCount) return;

    if (!selection.isCollapsed) {
        document.execCommand("delete");
        counters();
        return;
    }

    selection.modify("extend", "backward", "character");

    if (!selection.isCollapsed) {
        document.execCommand("delete");
    }
    counters();
}


function cleanupEmptyNodes(root) {
    const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_ELEMENT
    );
    const toRemove = [];
    while (walker.nextNode()) {
        const node = walker.currentNode;
        if (
            node !== root &&
            node.childNodes.length === 0
        ) {
            toRemove.push(node);
        }}
    for (const node of toRemove) {
        node.remove();
    }
}

function rightAlign() { 
  editor.style.textAlign = "right";
}

function leftAlign() {
  editor.style.textAlign = "left"; 
}

function centerAlign() {
  editor.style.textAlign = "center"; 
}

function justify() {
  editor.style.textAlign = "justify";
}

function saveFile() {
  const content = editor.innerHTML;
  const fullHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Downloaded Content</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 20px;
        }
      </style>
    </head>
    <body>
        <div style="text-align:${editor.style.textAlign}">
            ${editor.innerHTML}
        </div></body>
    </html>
  `;

  const blob = new Blob([fullHTML], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "new.html";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

