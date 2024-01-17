"use strict";
new CodeBlock(() => {
    Funcs.Main();
});
class Funcs {
    static Main() {
        this.RenderHTMLElement();
    }
    static RenderHTMLElement() {
        const render_button = document.querySelector("#render_element");
        render_button.onclick = () => {
            this.CreateElement();
        };
    }
    static CreateElement() {
        const element = document.createElement("div");
        element.style.background = "#000";
        element.style.width = "100px";
        element.style.height = "100px";
        $(element).draggable().resizable();
        Elements.play_ground().appendChild(element);
        console.log("element render");
    }
}
