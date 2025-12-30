

const editor = document.getElementById("editor");

const toolbar = document.getElementById("toolbar-content");
const toolbarBottom = document.getElementById("toolbar-content-bottom");

const wordOutput = document.getElementById('wordCounter');
const charOutput = document.getElementById('charCounter');

editor.addEventListener('input', () => {
  const text = editor.innerText.trim();
  wordOutput.value = text === "" ? 0 : text.split(/\s+/).length;
  charOutput.value = text.length;
});


toolbar.addEventListener("wheel", (e) => {
    e.preventDefault();

    toolbar.scrollLeft += e.deltaY;
});

toolbarBottom.addEventListener("wheel", (e) => {
    e.preventDefault();

    toolbarBottom.scrollLeft += e.deltaY;
});


function format(command){
    document.execCommand(command,false,null);
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

