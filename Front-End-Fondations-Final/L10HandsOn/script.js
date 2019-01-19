$(document).ready(function () {
    $(".img").hover(function () {
        $(this).addClass("transition");
    }, function () {
        $(this).removeClass("transition");
    });
});

const githubrepos = new XMLHttpRequest();
githubrepos.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        for (var i = 0; i < myObj.length; i++) {
            var obj = myObj[i];
            console.log(obj.name);
            let list = document.createElement("ul");
            list.innerHTML = obj.name
            let container = document.getElementById("demo");
            container.appendChild(list);
        }
    }
};

githubrepos.open("GET", "https://api.github.com/users/siznak86/repos", true);
githubrepos.send()

let url = document.createAttribute("href");
url.innerHTML = obj.html_url
container.appendChild(url);