import { entry, exit } from "./animation.js";

var data;

const getQuotes = cb => {
    if (!data) {
        fetch("https://type.fit/api/quotes")
            .then(res => {
                return res.json();
            })
            .then(res => {
                data = res;
                console.log(data);
                cb();
            })
            .catch(err => {
                console.log(err);
            });
    } else cb();
};

export const changeQuote = () => {
    getQuotes(() => {
        const quoteNum = parseInt(Math.random() * data.length);
        let text = data[quoteNum].text;
        let author = data[quoteNum].author;
        if (!author) author = "Anonymous";
        exit.play();
        exit.finished.then(() => {
            document.getElementById("text").innerHTML = text;
            document.getElementById("author").innerHTML = "-" + author;
            entry.play();
        });
    });
};

// document.getElementById("quote").addEventListener("click", changeQuote);
