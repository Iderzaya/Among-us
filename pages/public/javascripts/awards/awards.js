import Component from "../components/component.js"; 

 export default class AboutUs extends Component {

    constructor(awData) {
        super();
        this.appData = awData;
    }

     Render() {
        return `
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
                ${this.RenderListAwards(this.appData.award) }
                </section>
                </div>
            </section>
        </main>
        `}
        

    RenderListAwards(listOfAwards) {
        let retVal = "";

        for (let aw of listOfAwards) {
            retVal += `<my-awards id="${aw.id}" image = "${aw.image}" name = "${aw.name}" class ="awards" details ="${aw.details}"></my-awards>`
        }

        return retVal;
    }
 }