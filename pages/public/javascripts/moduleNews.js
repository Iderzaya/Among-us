export let News = {
    News: function(_id, _title, _image, _author, _post) {
        this.id = _id;
        this.title = _title;
        this.image = _image;
        this.post = _post;
        this.author = _author;
        return this;
    },

    CreateHtmlNews() {
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
}

export function getPostNews(url, heregjihFunctionNews) {

    fetch(url)
        .then(response => response.json())
        .then(data => {
            heregjihFunctionNews(data.news);
        })
};