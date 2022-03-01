export let News = {
    News: function(_title, _image) {
        this.title = _title;
        this.image = _image;
        return this;
    },


    CreateHtml() {
        let returnHtml = "";
        returnHtml += `
                <div class="piece">
                <picture><img src="${this.image}"  alt="1"></picture>
                <div class="innerText"><span>${this.title}</span></div>
                </div>`;
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