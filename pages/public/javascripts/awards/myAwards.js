import html from "../components/utils.js";
import  "../components/readButton.js";

class MyAwards extends HTMLElement {
    constructor() {
        super();
        this.myShadowRoot = this.attachShadow({ mode: "open" });
        this.myShadowRoot.innerHTML = `
        <style>
        @media all {            
            img {
                border: rgba(255, 255, 255, 1);
                border-style: solid;
                border-width: 1px;
                padding: 20px;
                width: 100%;
                max-width: 100%;
                max-height: 200px;
                height: auto;
                object-fit: cover;
                overflow: hidden;
                object-position: top;
                box-sizing: border-box;
            }
            
            .award {
                margin-top: 20px;
            }
            }
            @media screen and (max-width:600px) {
                .award {
                    font-size: 30px;
                }
            }
        </style>

            <div>
                <img src="${this.getAttribute("image")}">
                <p class="award">${this.getAttribute("name")}</p>
                <reading-but details = ${this.getAttribute("details")}></reading-but>
            </div>`
    }

}

window.customElements.define("my-awards", MyAwards);