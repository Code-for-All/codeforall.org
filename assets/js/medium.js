$(document).ready(function () {
    if(!$('.medium-items-here')) return;

    $.get("https://cors-anywhere.herokuapp.com/https://medium.com/feed/code-for-all", function (data) {
        var s = "";
        var i = 0;

        $(data).find("item").each(function () {
            i++;
            if(i > 3) return;

            var el = $(this);
            var d = new Date(Date.parse(el.find("pubDate").text()));
            console.log(d);
            var pubDateStr = d.getDate()  + "." + d.getMonth() + "." + d.getFullYear();

            s += '<div class="col-10 col-sm-7 col-md-4"><a href="' + el.find("link").text() + '"><div class="what__item"><div class="pencil"></div><h2 class="what-h2"><a style="color: #2897D5!important" href="' + el.find("link").text() + '">' + el.find("title").text() + '</a></h2><p class="what-p-small">' + jQuery(el.find("content\\:encoded").text()).text().split(" ").splice(0, 20).join(" ") + '</p><p class="what-p-big">' + el.find("dc\\:creator").text() + '<br/>' + pubDateStr + '</p></div></a></div>';
        });

        $('.medium-items-here').after(s);
    });
  });