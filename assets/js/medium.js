$(document).ready(function () {
    if(!$('.medium-items-here')) return;

    $.get("https://cors-anywhere.herokuapp.com/https://medium.com/feed/code-for-all", function (data) {
        var i = 0;

        $(data).find("item").each(function () {
            i++;
            if(i > 3) return;

            var el = $(this);
            var link = el.find("link").text();

            var d = new Date(Date.parse(el.find("pubDate").text()));
            var pubDateStr = d.getDate()  + "." + d.getMonth() + "." + d.getFullYear();
            var creator = el.find("dc\\:creator").text();

            var content = el.find('content\\:encoded').text();

            // wrap twice to get rid of CDATA
            var paragraph = $(content);
            paragraph.remove('figcaption');
            paragraph = paragraph.text();
            paragraph = paragraph.split(".").splice(0, 1).join(" ") + '.';

            var paragraph_len = 200;
            if (paragraph.length > paragraph_len) {
                var words = paragraph.substr(0, paragraph_len).split(" ");
                words.pop();
                paragraph = words.join(" ") + '...';
            }

            var item = $(`
<div class="col-10 col-sm-7 col-md-4">
    <a href="${link}">
        <div class="what__item">
            <div class="pencil">
            </div>
            <h2 class="what-h2">
                <a style="color: #2897D5!important" href="${link}">${el.find("title").text()}</a>
            </h2>
            <p class="what-p-small">${paragraph}</p>
            <p class="what-p-big">${creator}<br/>${pubDateStr}</p>
        </div>
    </a>
</div>`);


            // get image
            var matches = /https:\/\/cdn-images-1\.medium\.com\/max\/\d+\/([^"]+)/.exec(content);
            if (matches) {
                var image = 'https://cdn-images-1.medium.com/max/400/' + matches[1];
                item.find('.pencil').css('background-image', `url("${image}")`);
            }

            $('.medium-items-here').before(item);
        });


    });
  });