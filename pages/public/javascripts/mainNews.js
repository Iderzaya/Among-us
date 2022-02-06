import { News, getPost } from './moduleNews.js';

const postUrl = "https://api.jsonbin.io/b/61ffad87f77b236211eddac8/latest";

getPost(postUrl,
    (newslist) => {

        let retHtml = "";
        newslist.forEach(element => {
            retHtml += News.News(element.title, element.author, element.image).CreateHtml();

        });
        document.getElementById("newsAll").innerHTML = retHtml;
    });