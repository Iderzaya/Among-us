export let News = {
    News: function(_id, _title, _image, _authorImage, _author, _post) {
        this.id = _id;
        this.title = _title;
        this.image = _image;
        this.post = _post;
        this.authorImage = _authorImage;
        this.author = _author;
        return this;
    },
    //element.title, element.image, element.authorImage, element.author, element.post

    CreateHtml() {
        let returnHtml = "";
        returnHtml += '<div>\
                    <p class="ctr">\
                        <a href="article.html"><img src=' + this.image + '></a>\
                    </p>\
                    <h2>' + this.title + '</h2>\
                    <p id="author">' + this.author + '</p>\
                </div>';
        return returnHtml;
    },

    returnTitle() {
        document.getElementById("newsAll").setAttribute("id", this.id)
    },

    CreateHtmlArticle() {

        let returnHtml = "";
        returnHtml += `
        <div class="headline">
            <img src= ${this.image}>
            <div class="botline"></div>
            <div class="topline"></div>
            <blockquote>${this.title}</blockquote>
            <h1 class="pos">News</h1>
        </div>
        <section class="container-xl">
            <div class="text">${this.post}</div>
            <div class="writer grid">
                <div class="profile"><img class="zaya" src= ${this.authorImage}></div>
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
};