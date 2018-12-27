// For Node.js
var FeedParser = require('feedparser');
var request = require('request'); // for fetching the feed
var TurndownService = require('turndown')
var fs = require('fs');
var moment = require('moment');
var turndownService = new TurndownService()
var req = request('https://medium.com/feed/code-for-all/tagged/collaboration')
var feedparser = new FeedParser();
var url = require("url");
var path = require("path");

function string_to_slug(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
    
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
  
    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes
  
    return str;
}

req.on('error', function (error) {
  // handle any request errors
});

req.on('response', function (res) {
  var stream = this; // `this` is `req`, which is a stream

  if (res.statusCode !== 200) {
    this.emit('error', new Error('Bad status code'));
  }
  else {
    stream.pipe(feedparser);
  }
});

feedparser.on('error', function (error) {
  // always handle errors
});

feedparser.on('readable', function () {
  var stream = this;
  var meta = this.meta;
  var item;
  var i = 0;
  while (item = stream.read()) {
    //todo grab the first image in the post and use it as banner header property
    var base_image = '';
    var first = false;
    var images = [];
    var markdown = turndownService.turndown(item.description);
    var splitlines = (markdown.split('\n'));
    for (var line in splitlines) {
        if(splitlines[line].startsWith("![]")){
            image = splitlines[line].split("(")[1].replace(')','');
            if(!image.startsWith('https://medium.com')){
                var parsed = url.parse(image);
                var fullfilename = './assets/images/blog/' + path.basename(parsed.pathname)
                var store = fs.createWriteStream(fullfilename);
                var grab = request(image).pipe(store);
                images.push(image);
                if(!first){
                    base_image = 'banner: ' + fullfilename + '\n';
                    first = true;
                }
            }
        }
    }
    console.log(images);

    var header = '---\n' +
      'layout: post\n' +
      'title:  "' + item['rss:title']['#'] + '"\n' +
      'author: ' + item['dc:creator']['#'] + '\n' +
      base_image +
      //'banner: /assets/images/blog/1*BBdkHexpX6oK8XGyAyEzSw.jpeg\n' +
      'medium: ' + item.link + '\n' +
      '---\n\n';
    var published = new Date(item.pubdate);
    var filename = moment(published).format("YYYY-MM-DD") + '-' + string_to_slug(item['rss:title']['#'].substring(0,20).toLowerCase());
    
    fs.writeFile('./_posts/' + filename + ".md", header + markdown, function(err){
        if(err){
            return console.log(err);
        }
        console.log('./_posts/' + filename + ".md" + " saved");
    });
  }
});