import Component from "./component.js"; 

export default class ReadMore extends Component {
    constructor() {
        super();
        this.myShadowRoot = this.attachShadow({ mode: "open" });
        this.myShadowRoot.innerHTML = `
        <style>
        @import url(https://fonts.googleapis.com/css?family=Space+Mono);
        @media all {            
            button{
                height:20px;
                width: 30px;
                background-color: red;
            }
            }
            @media screen and (max-width:600px) {
                
            }
        </style>

            <div>
                <div class="moreInfo">
                    <p>${this.getAttribute("details")}</p>
                </div>
                <button>Read More</button>
            </div>`
    }

}

window.customElements.define("read-button", ReadMore);