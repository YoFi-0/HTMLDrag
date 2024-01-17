class CodeBlock {
    constructor (public code:() => void) {
        this.code = code;
    }
    public Run() {
        this.code()
    }
}

class CodeRunner {
    public RunAll(...files:string[]){
        files.forEach( async (path) => {
            const res = await fetch(`/public/js${path}`)
            const code = await res.text();
            (eval(code) as CodeBlock).Run()
        })
    }
}
class Elements {
    public static play_ground:() => HTMLDivElement = () => document.querySelector(".play_ground") as HTMLDivElement
}




class Wid {
    private static OnKeyDwonList:((e:KeyboardEvent) => void)[] = []
    public static OnKeyDwonRun(){
        window.onkeydown = (e:KeyboardEvent) => {
            this.OnKeyDwonList.forEach(func => {
                func(e)
            })
        }
    }
    public static OnKeyDwon(func:(e:KeyboardEvent) => void){
        this.OnKeyDwonList.push(func)
    }

    private static OnKeyUpList:((e:KeyboardEvent) => void)[] = []
    public static OnKeyUpRun(){
        window.onkeyup = (e:KeyboardEvent) => {
            this.OnKeyDwonList.forEach(func => {
                func(e)
            })
        }
    }
    public static OnKeyUp(func:(e:KeyboardEvent) => void){
        this.OnKeyDwonList.push(func)
    }

    private static OnkeyPressList:((e:KeyboardEvent) => void)[] = []
    public static OnkeyPressRun(){
        window.onkeypress= (e:KeyboardEvent) => {
            this.OnKeyDwonList.forEach(func => {
                func(e)
            })
        }
    }
    public static OnkeyPress(func:(e:KeyboardEvent) => void){
        this.OnKeyDwonList.push(func)
    }

    private static button_1:string = ""
    private static button_2:string = ""
    public static CreateShortCut(button_1:string, button_2:string, func:() => void){
        this.OnkeyPress((e) => {
            this.button_1 = button_1
            this.button_2 = button_2
            if(this.button_1 && this.button_2){
                this.button_1 = ""
                this.button_2 = ""
                func()
            }
        })
        this.OnKeyDwon((up) => {
            
        })
    }
}
Wid.OnKeyDwonRun()