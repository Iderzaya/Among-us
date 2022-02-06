import { News, getPost } from './moduleIndex.js';

const postUrl = "https://api.jsonbin.io/b/61ffad87f77b236211eddac8/latest";

getPost(postUrl,
    (newslist) => {

        let retHtml = "";
        for (let i = 0; i < 4; i++) {
            retHtml += News.News(newslist[i].title, newslist[i].image).CreateHtml();
        }
        document.getElementsByClassName("newsCards")[0].innerHTML = retHtml;
    });