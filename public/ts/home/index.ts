new CodeBlock(() => {
    Funcs.Main()
})

class Funcs {
    public static Main(){
        this.RenderHTMLElement()
    }
    private static RenderHTMLElement(){
        const render_button = document.querySelector("#render_element") as HTMLButtonElement
        render_button.onclick = () => {
            this.CreateElement()
        }
    }
    private static CreateElement(){
        const element  = document.createElement("div")
        element.style.background = "#000"
        element.style.width = "100px"
        element.style.height = "100px"
        
        $(element).draggable().resizable()
        Elements.play_ground().appendChild(element)
        console.log("element render")
    }
}