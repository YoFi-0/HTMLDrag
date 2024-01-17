"use strict";
class CodeRunner {
    Files = [];
    RunAll() {
        this.Files.forEach(async (path) => {
            const res = await fetch(`/public/js/${path}`);
            const code = await res.text();
            eval(code).Run();
        });
    }
}
