'use strict';
import AboutUs from "./pages/public/javascripts/awards/awards.js";
class MyApp {

    //# constructor үүсгэх
    constructor(appID) {
        this.appContainerID = "myApp";
        this.appData = new Map();
        this.appData.set("/", new Map());
    }


    //#endregion

    AddRoute(parentRoute, routeName, data) {
        this.appData.get(parentRoute).set(routeName, data);
    }

    OnRoute(route) {
        console.log(`route = ${route}`)
        document.getElementById(this.appContainerID).innerHTML = this.appData.get("/").get(route)?.Render() || this.NotFound();
    }

    NotFound() {
        return `<section><div>Not found :( 404</div></section>`
    };

}
class Characters {
    Render() {
        return `
        <div class="container-xl mt-4">
            <div class="row">
                <div class="d-md-block col-sm-12 col-md-6 col-lg-6" id="first">
                    <img src="./pages/public/images/crew.jpg">
                </div>
                <div class="d-md-block col-sm-12 col-md-6 col-lg-6" id="second">
                    <h2>Objective : Fill the group task bar or eject the Impostors.</h2>
                    <p>Complete all the task on the ship or eject impostors to win. Call emergency meetings if you see any dead bodies or suspicious behavior. Check the Admin map and Security cameras to keep tabs on other Crewmates. React quickly to undo
                        the Impostor’s sabotages. Make sure you have your alibi ready in case you’re falsely accused. Vote to eject suspected Impostors. Hope you guessed correctly!</p>
                </div>
                <div class="d-md-block col-sm-12 col-md-6 col-lg-6" id="fourth">
                    <h2>Objective : Kill off the crew.</h2>
                    <p>Kill Crewmates and frame innocent bystanders. Pretend to do tasks to blend in with the Crewmates. Sneak through the vents to quickly move around. Sabotage tasks to cause chaos and confuse the crew. Close doors to trap victims and kill
                        in private. Do everything you can to convince the crew that you’re one of them.</p>
                </div>
                <div class="d-md-block col-sm-12 col-md-6 col-lg-6" id="third">
                    <img src="./pages/public/images/imposter.png">
                </div>
            </div>
        </div>
        `
    }
}

class Article {

    Render() {
        
        return `<main id="main">
        <div class="headline">
            <img src="./pages/public/images/new.jfif">
            <div class="botline"></div>
            <div class="topline"></div>
            <blockquote>The most viewed YOUTUBE AMONG US VIDEO</blockquote>
            <h1 class="pos">News</h1>
        </div>
        <section class="container-xl">
            <div class="text">
                <p>The eighth Harry Potter story will continue in London within its two-part structure (in the North American productions, the play is being reimagined as a one-part experience) and is celebrating its big return with gorgeous new poster artwork.
                    You can learn all about the artwork’s evolution here.</p>
                <p>Reopening the West End production are Jamie Ballard as Harry Potter, Susie Trayling as Ginny Potter, Dominic Short as Albus Potter, Thomas Aldridge as Ron Weasley, Michelle Gayle as Hermione Granger, Phoenix Edwards as Rose Granger-Weasley,
                    James Howard as Draco Malfoy, and Luke Sumner as Scorpius Malfoy.</p>
                <p>The ensemble includes Lola Adaja, Samson Ajewole, David Annen, Valerie Antwi, Sue Appleby, Phil Cheadle, Craig Connolly, Robert Curtis, Tim Dewberry, Jim Fish, Thomas Gilbey, Jemma Gould, Rachel Hinds, Jordan Lang, Ronnie Lee, Katrina
                    Lopes, Lucy Mangan, David Mara, Lucia McAnespie, Jayne McKenna, Kathryn Meisle, Gordon Millar, Ian Redford, Thomas Royal, Tom Sturgess, Joshua Talbot, Mark Theodore, Emma-May Uden, Madeleine Walker, and Wreh-asha Walton.</p>
                <p>Seven children—Noah Alexander, Tom Quinn Alexander, Abby Barnes, Harley Barton, Chase Collard, Samuel Newby, and Cici Smith—alternate in two roles.</p>
                <p>Welcome back, everyone!</p>
                <p>You can learn more about the Harry Potter and the Cursed Child play in London via the official website.</p>
            </div>
            <div class="writer grid">
                <div class="profile"><img class="zaya" src="./pages/public/images/zaya.jfif"></div>
                <h6>Written by</h6>
                <b>Iderzaya</b>
            </div>
        </section>
    </main>`

    }
}

class News {

    Render() {
        return `
        <main>
        <div class="headline">
            <img src="./pages/public/images/news pge.jfif">
            <div class="botline"></div>
            <div class="topline"></div>
            <blockquote>News</blockquote>
            <h1 class="pos">Get the latest among us news</h1>
        </div>
        </div>
        <div class = "container-xl">
            <div class="BigPost">
                <div class="BigThumbnail">
                    <img src="./pages/public/images/amongus_news.png">
                </div>
                <div class="BigText">
                    <h2>T’S AMONG US’ BIRTHDAYYYYYYYYYYYY!</h2>
                    <p>On June 15th 2018, we released Among Us… as a local, mobile only game with just a few players. And now in 2021, not only is the game out on PC, Nintendo Switch, mobile and soon Xbox and PlayStation, but we also have this GIANT community
                        of Crewmates and Impostors all over the world??? </p>
                </div>
            </div>

            <div class="title ">
                <p>More to explore</p>
            </div>
            <section class="grid" id="newsAll"></section>
        </div>
    </main>
    `
    }
}

class Index {
    Render() {
        return `
        `
    }
}

//creating app 
const myApp = new MyApp("myApp");
const article = new Article();



//const postUrlAwards = "https://api.jsonbin.io/b/6220dbeaa703bb674920f9f1/latest";
// async function getPostAwards() {
//     const response = await fetch(postUrlAwards);
//     const data = await response.json();
//     console.log(data);
//     return data;
// }; 

const getPostAwards = fetch("https://api.jsonbin.io/b/6220dbeaa703bb674920f9f1/latest")
  .then((response) => response.json())
  .then((data) => {
    return data;
  });

const dataAw = await getPostAwards;
    console.log(dataAw);

const aboutUs = new AboutUs(dataAw);

const characters = new Characters();
const news = new News();
const index = new Index();
//Route list
myApp.AddRoute("/", "/news", news);
myApp.AddRoute("/", "/aboutus", aboutUs);
myApp.AddRoute("/", "/article", article);
myApp.AddRoute("/", "/characters", characters);
myApp.AddRoute("/", "/", index);


[...document.getElementsByClassName("nav-link active")].forEach(element => {

    element.addEventListener("click", e => {
        e.preventDefault();
        history.pushState(null, "", e.target.href);
        //myApp.OnRoute(e.target.href);
    })
});

window.addEventListener("popstate", e => {
    console.log("navigation occured");
    myApp.OnRoute(document.location.pathname);
});

history.pushState = function() {
        History.prototype.pushState.apply(history, arguments);
        myApp.OnRoute(document.location.pathname);
    }
    //myApp.OnRoute(location.pathname);
    //myApp.OnRoute("/aboutus");
    //myApp.OnRoute("/products");
    //Tsendayush