'use strict';
//import news from './pages/public/javascripts/mainNews.js'

class MyApp {

  //# constructor үүсгэх
    constructor(appID) {
        this.appContainerID =  "myApp";
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

class AboutUs {


    
    Render() {
        return `
        <main class="container-xl">
        <div class="headline">
            <img src="./public/images/aboutus.png">
            <div class="botline"></div>
            <div class="topline"></div>
            <blockquote>About us</blockquote>
            <div class="pos">
                <a href="#" class="trailer">watch it trailer</a>
            </div>
        </div>
        <video playsinline autoplay muted loop id="bgvid">
        <source src="./public/images/stars.mp4" type="video/mp4">
    </video>
        <section>
            <div class="rule">
                <h1>Game rule: how to play</h1>
                <p>Prepare for departure but beware the Impostor! Play with 4-15 players online or via local WiFi as you attempt to hold your spaceship together and survive, but be careful. One or more random players among the crew are Impostors bent on
                    killing everyone!</p>
            </div>
            <h1 class="OurInfo">Here are all our awards taken from various occasions</h1>
            <section id="parent" class="grid">
                <div class="awards">
                    <div><img src="./public/images/award1.jfif">
                        <p class="award">Best of best</p>
                    </div>
                </div>
                <div class="awards">
                    <div><img src="./public/images/award1.jfif">
                        <p class="award">Best of best</p>
                    </div>
                </div>
                <div class="awards">
                    <div><img src="./public/images/award1.jfif">
                        <p class="award">Best of best</p>
                    </div>
                </div>
                <div class="awards">
                    <div><img src="./public/images/award1.jfif">
                        <p class="award">Best of best</p>
                    </div>
                </div>
                <div class="awards">
                    <div><img src="./public/images/award1.jfif">
                        <p class="award">Best of best</p>
                    </div>
                </div>
                <div class="awards">
                    <div><img src="./public/images/award1.jfif">
                        <p class="award">Best of best</p>
                    </div>
                </div>
            </section>
            </div>
        </section>
    </main>
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
            <video playsinline autoplay muted loop id="bgvid">
              <source src="./pages/public/images/stars.mp4" type="video/mp4">
          </video>
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
        <div>
            <video playsinline autoplay muted loop id="bgvid">
        <source src="./pages/public/images/stars.mp4" type="video/mp4">
    </video>
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

            <div class="title">
                <p>More to explore</p>
            </div>
            <section class="grid" id="newsAll"></section>
        </div>
    </main>`
    
            }}

//creating app 
const myApp = new MyApp("myApp");


const article = new Article();
const aboutUs = new AboutUs();




const news = new News();





//Route list
myApp.AddRoute("/","/news", news);
myApp.AddRoute("/", "/aboutus", aboutUs);
myApp.AddRoute("/", "/article", article);


[...document.getElementsByClassName("nav-link active")].forEach(element => {
    
    element.addEventListener("click", e => {
        e.preventDefault();
        history.pushState(null, "", e.target.href);
        //myApp.OnRoute(e.target.href);
    }
    )
});

window.addEventListener("popstate", e => {
    console.log("navigation occured");
    myApp.OnRoute(document.location.pathname);
});

history.pushState = function()
{
    History.prototype.pushState.apply(history, arguments);
    myApp.OnRoute(document.location.pathname);
}
//myApp.OnRoute(location.pathname);
//myApp.OnRoute("/aboutus");
//myApp.OnRoute("/products");