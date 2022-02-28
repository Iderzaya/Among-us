export let News = {
    News: function(_title, _image, _authorImage, _author, _post) {
        this.title = _title;
        this.image = _image;
        this.post = _post;
        this.authorImage = _authorImage;
        this.author = _author;
        return this;
    },
    CreateHtml() {
        let returnHtml = "";
        returnHtml += `
            <img src=${this.image}>
            <div class="botline"></div>
            <div class="topline"></div>
            <blockquote>${this.title}</blockquote>
            <h1 class="pos">News</h1>
        </div>
        <section class="container-xl">
            <video playsinline autoplay muted loop id="bgvid">
              <source src="./public/images/stars.mp4" type="video/mp4">
          </video>
            <div class="text">${this.post}</div>
            <div class="writer grid">
                <div class="profile"><img class="zaya" src=${this.authorImage}></div>
                <h6>Written by</h6>
                <b>${this.author}</b>
            </div>
        </section>`;
        return returnHtml;
    },
}

export function getPost(url, heregjihFunction) {

    fetch(url)
        .then(response => response.json())
        .then(data => {
            heregjihFunction(data.news);
        })
}