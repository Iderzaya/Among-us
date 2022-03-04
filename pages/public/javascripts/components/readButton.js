export default class ReadMore extends HTMLElement {
    constructor() {
        super();
        this.innerRoot = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.Render();
    }

    Render() {
        console.log("rendering...");
        this.innerRoot.innerHTML =  `
            <style>
            button{
                background-color: red;
            }
            </style>
    
            
            <button>Read me</button>`;
    }
}

window.customElements.define("reading-but", ReadMore);