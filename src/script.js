

const editor = document.getElementById("editor");

const formatTab = document.getElementById("format-options");
const toolbar = document.getElementById("toolbar-options");

const wordOutput = document.getElementById('word-counter');
const charOutput = document.getElementById('char-counter');

function counters(){
  const text = editor.innerText.trim();
  wordOutput.value = text === "" ? 0 : text.split(/\s+/).length;
  charOutput.value = text.length;
}

counters();

editor.addEventListener('input', ()=>{
    counters();
});

function updateToolbarLayout(el) {
    if (el.scrollWidth > el.clientWidth) {
        el.style.justifyContent = "flex-start";
        el.style.overflowX = "auto";
    } else {
        el.style.justifyContent = "center";
        el.style.overflowX = "hidden";
    }
}

function updateLayouts() {
    updateToolbarLayout(formatTab);
    updateToolbarLayout(toolbar);
}

window.addEventListener("resize", updateLayouts);
updateLayouts();


formatTab.addEventListener("wheel", (e) => {
    e.preventDefault();

    formatTab.scrollLeft += e.deltaY;
});

toolbar.addEventListener("wheel", (e) => {
    e.preventDefault();

    toolbar.scrollLeft += e.deltaY;
});

document.getElementById("fontFamily").addEventListener("change", function () {
  const fam = this.value;
  const ed = editor;
  const sel = window.getSelection();
  ed.focus();

  if (sel.rangeCount > 0 && !sel.isCollapsed) {
    const rng = sel.getRangeAt(0);
    const frag = rng.extractContents();

    const sp = document.createElement("span");
    sp.style.fontFamily = fam;
    sp.appendChild(frag);

    rng.insertNode(sp);
    sel.removeAllRanges();
  } else {
    ed.querySelectorAll('[style]').forEach(el => {
    el.style.removeProperty("font-family");
    if (el.getAttribute("style")?.trim() === "") el.removeAttribute("style");
  });

  const span = document.createElement("span");
  span.style.fontFamily = fam;
  span.innerHTML = ed.innerHTML;
  ed.innerHTML = "";
  ed.appendChild(span);
  ed.focus();
  }
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
    editor.style.fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`;
    document.getElementById("fontFamily").value = "inherit";
}

function clearEditor(){
    let confirmation = confirm("Are you sure? This can not be undone.")
    if (confirmation){
      editor.innerHTML = "";
    }
}


function lineBreak() {
  const selection = window.getSelection();
  if (!selection.rangeCount) return;

  const range = selection.getRangeAt(0);

  if (!editor.contains(range.commonAncestorContainer)) return;

  range.deleteContents();
  const br = document.createElement("br");
  range.insertNode(br);

  // Move cyrsor after br
  range.setStartAfter(br);
  range.collapse(true);
  selection.removeAllRanges();
  selection.addRange(range);
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

