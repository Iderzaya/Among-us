import Component from "./component.js"; 

export default class ReadMore extends Component {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.Render();
    }

    Render() {
        console.log("rendering...");
        this.innerRoot.innerHTML = html `
            <style>

                #a2{
                    display:none;
                }
        
                #aa2::before {
                    content:"❤";
                    color:gray;
                    cursor:pointer;
                }
        
                #a2:checked+#aa2::before{
                    color: tomato;
                }
        
                label{user-select: none;}
            
            </style>
    
            <input id="a2" type="checkbox">
            
            <label for="a2" id="aa2">${this.getAttribute("details") || 0}</label>`;

        this.innerRoot.getElementById("details").addEventListener("click",console.log("123"));

    }

}

window.customElements.define("read-button", ReadMore);