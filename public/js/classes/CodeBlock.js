"use strict";
class CodeBlock {
    code;
    constructor(code) {
        this.code = code;
        this.code = code;
    }
    Run() {
        this.code();
    }
}
class CodeRunner {
    RunAll(...files) {
        files.forEach(async (path) => {
            const res = await fetch(`/public/js${path}`);
            const code = await res.text();
            eval(code).Run();
        });
    }
}
class Elements {
    static play_ground = () => document.querySelector(".play_ground");
}
class Wid {
    static OnKeyDwonList = [];
    static OnKeyDwonRun() {
        window.onkeydown = (e) => {
            this.OnKeyDwonList.forEach(func => {
                func(e);
            });
        };
    }
    static OnKeyDwon(func) {
        this.OnKeyDwonList.push(func);
    }
    static OnKeyUpList = [];
    static OnKeyUpRun() {
        window.onkeyup = (e) => {
            this.OnKeyDwonList.forEach(func => {
                func(e);
            });
        };
    }
    static OnKeyUp(func) {
        this.OnKeyDwonList.push(func);
    }
    static OnkeyPressList = [];
    static OnkeyPressRun() {
        window.onkeypress = (e) => {
            this.OnKeyDwonList.forEach(func => {
                func(e);
            });
        };
    }
    static OnkeyPress(func) {
        this.OnKeyDwonList.push(func);
    }
    static button_1 = "";
    static button_2 = "";
    static CreateShortCut(button_1, button_2, func) {
        this.OnkeyPress((e) => {
            this.button_1 = button_1;
            this.button_2 = button_2;
            if (this.button_1 && this.button_2) {
                this.button_1 = "";
                this.button_2 = "";
                func();
            }
        });
        this.OnKeyDwon((up) => {
        });
    }
}
Wid.OnKeyDwonRun();
