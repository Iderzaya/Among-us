export let News = {
    News: function(_title, _author, _image) {
        this.title = _title;
        this.author = _author;
        this.image = _image;
        return this;
    },


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
}

export function getPost(url, heregjihFunction) {

    fetch(url)
        .then(response => response.json())
        .then(data => {
            heregjihFunction(data.news);
        })
}