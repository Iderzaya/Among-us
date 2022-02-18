import { News, getPost } from './moduleNews.js';

const postUrl = "https://api.jsonbin.io/b/61ffad87f77b236211eddac8/latest";

getPost(postUrl,
    (newslist) => {

        let retHtml = "";
        let retTitle = News.returnTitle;
        newslist.forEach(element => {
            document.getElementById(element.id)
            if (element.title == retTitle) {
                retHtml += News.News(element.id, element.title, element.image, element.authorImage, element.author, element.post).CreateHtmlArticle();
            }
        });
        document.getElementById("main").innerHTML = retHtml;
    });