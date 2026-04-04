import os

SRC_DIR = "src"
DIST_DIR = "dist"

HTML_FILE = os.path.join(SRC_DIR, "index.html")
CSS_FILE = os.path.join(SRC_DIR, "style.css")
JS_FILE = os.path.join(SRC_DIR, "script.js")

OUTPUT_FILE = os.path.join(DIST_DIR, "text-editor.html")

def read_file(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


def write_file(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

def build():
    print("Building Text Editor...")

    html = read_file(HTML_FILE)
    css = read_file(CSS_FILE)
    js = read_file(JS_FILE)

    html = html.replace(
        '<link rel="stylesheet" href="style.css">',
        "<style>\n" + css + "\n</style>"
    )

    html = html.replace(
        '<script src="script.js"></script>',
        "<script>\n" + js + "\n</script>"
    )

    os.makedirs(DIST_DIR, exist_ok=True)

    write_file(OUTPUT_FILE, html)

    print("Build complete!")
    print("Output:", OUTPUT_FILE)


if __name__ == "__main__":
    build()