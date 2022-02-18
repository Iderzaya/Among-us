import { News, getPost } from './moduleNews.js';

const postUrl = "https://api.jsonbin.io/b/61ffad87f77b236211eddac8/latest";

getPost(postUrl,
    (newslist) => {

        let retHtml = "";
        newslist.forEach(element => {
            retHtml += News.News(element.id, element.title, element.image, element.authorImage, element.author, element.post).CreateHtml();

        });
        document.getElementById("newsAll").innerHTML = retHtml;
    });