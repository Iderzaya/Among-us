export default class ReadMore extends HTMLElement {
    constructor() {
        super();
        this.innerRoot = this.attachShadow({
            mode: "open"
        });

        this.showInfo = false;
        console.log("rendering...");
        this.innerRoot.innerHTML = `
            <style>
            button{
                display: inline-block;
                text-align: center;
                width: 200px;
                border: rgba(255, 255, 255, .2);
                border-style: solid;
                border-width: 3px;
                background-color: transparent;
                padding: 10px 30px;
                color: #fff;
                text-decoration: none;
                transition: all .3s ease-in-out
            }
            button:hover, button:focus{
                color: #fff;
                text-decoration: none;
                bottom: 41%;
                border: rgba(255, 0, 0, .4);
                border-style: solid;
                border-width: 3px
            }
            .info { 
                display:none;
            }
            </style>
    
            <div class = "info">${this.getAttribute("details")}</div>

            <button id = "toggle-info">Show Info</button>`;
    }

    connectedCallback() {
        this.shadowRoot.querySelector("#toggle-info").addEventListener("click", () => this.toggleInfo());
    }

    toggleInfo() {
        this.showInfo = !this.showInfo;

        const info = this.shadowRoot.querySelector(".info");
        const toggleBtn = this.shadowRoot.querySelector("#toggle-info");
        if(this.showInfo == true){
            info.style.display = "block";
            toggleBtn.innerText = "Hide Info";
        } else{
            info.style.display = "none";
            toggleBtn.innerText = "Show Info";
        }
    }

    disconnectedCallback(){
        this.shadowRoot.querySelector("#toggle-info").removeEventListener();
    }
}

window.customElements.define("reading-but", ReadMore);