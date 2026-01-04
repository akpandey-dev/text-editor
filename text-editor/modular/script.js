

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
}

function clearEditor(){
    editor.innerHTML = "";
}

function saveFile(){

    const blob = new Blob([editor.innerHTML],{type:"text/html"});

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "document.html";
    a.click();

    URL.revokeObjectURL(url);
}

