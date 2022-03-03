import Component from "../components/component.js";
import Awards from "./moduleAwards.js";

const postUrl = "https://api.jsonbin.io/b/6220dbeaa703bb674920f9f1/latest"; 

export default class Awards extends Component {
   
    constructor(url, heregjihFunctionNews) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                heregjihFunctionNews(data.awards);
            })
    }

    Render() {
        return this.html`
        <main>
            <div class="headline aboutUs">
                <img src="./pages/public/images/aboutus.png">
                <div class="botline"></div>
                <div class="topline"></div>
                <blockquote>About us</blockquote>
                <div class="pos">
                    <a href="#" class="trailer">watch trailer</a>
                </div>
            </div>
            <section class="container-xl">
                <div class="rule">
                    <h1>Game rule: how to play</h1>
                    <p>Prepare for departure but beware the Impostor! Play with 4-15 players online or via local WiFi as you attempt to hold your spaceship together and survive, but be careful. One or more random players among the crew are Impostors bent on
                        killing everyone!</p>
                </div>
                <h1 class="OurInfo">Here are all our awards taken from various occasions</h1>
                <section id="parent" class="grid" >
                ${ this.RenderList(this.appData.awards) }
                </section>
                </div>
            </section>
        </main>
        `;
    }

    RenderList(listOfAwards) {
        let retVal = "";

        for (let aw of listOfAwards) {
            retVal+=`<my-awards id=${aw.id}></my-awards>`
        }

        return retVal;
    }

}