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

    // $.ajax({
    //           url: 'https://api.codeforamerica.org/api/organizations?type=Code+for+All&per_page=100',
    //           success: function(data) {
    //             //console.log(data['objects']);
    //             var array = data['objects'];
    //             var i;
    //               for (i = 0; i < 6; ++i) {
    //                   $('.medium-items-here').append('<div class="col-md-12 col-lg-6"><div class="projects-item"><a href="' + array[i]['website'] + '"><div class="projects-item-img"></div><h2 class="projects-item-h2">'+array[i]['name']+'</h2><p class="projects-item-p">How fair are the playgrounds in Hamburg spatially distributed? ...</p><div class="row"><div class="col-12 col-sm-6 order-sm-1 order-2"><div class="avatar"></div><p class="item-info-p-big">Name Surname</p><p class="item-info-p-small">Email</p></div><div class="col-12 col-sm-6 order-sm-2 order-1"><div class="location"><span class="location-info">Sollicitudin Sit</span><span class="location-info">Euismod</span></div><div class="address-block"><span class="address">'+array[i]['city']+'</span></div></div></div></a></div></div>');
    //               }
    //               $('.medium-items-here').append('<div class="last-prj-item"></div>');
    //           }
    //         });
  });