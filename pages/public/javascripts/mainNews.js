import { News, getPostNews } from './moduleNews.js';

const postUrl = "https://api.jsonbin.io/b/61ffad87f77b236211eddac8/latest";

getPostNews(postUrl,
    (newslist) => {

        let retHtml = "";
        newslist.forEach(element => {
            retHtml += News.News(element.id, element.title, element.image, element.author, element.post).CreateHtmlNews();
        })
        console.log(retHtml);
        let elem = document.getElementById("newsAll");
        if(elem)
            elem.innerHTML = retHtml;
    });
