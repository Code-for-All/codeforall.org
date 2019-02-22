// Dependencies
var FeedParser = require('feedparser');
var request = require('request'); // for fetching the feed
var TurndownService = require('turndown')
var fs = require('fs');
var moment = require('moment');
var turndownService = new TurndownService()
var feedparser = new FeedParser();
var url = require("url");
var path = require("path");
var program = require('commander');

/**
 * Convert a string so it can serve as a slug that doesn't break because of unwanted characters
 * 
 **/ 
function string_to_slug(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return str;
}

/**
 * 
 * @param {*} item 
 */
function parseItem(item){
  var banner = '';
      var categories = "";
  
      var first = false;
      var images = [];
      var tags = [];
  
      for (var i in item["rss:category"]) {
        tags.push(item["rss:category"][i]['#']);
      }
      var markdown = turndownService.turndown(item.description);
      var splitlines = (markdown.split('\n'));
      for (var line in splitlines) {
        if (splitlines[line].startsWith("![]")) {
          image = splitlines[line].split("(")[1].replace(')', '');
          if (!image.startsWith('https://medium.com')) {
            var parsed = url.parse(image);
            var fullfilename = './assets/images/blog/' + path.basename(parsed.pathname)
            if (!fs.existsSync(fullfilename)) {
              // Only write the image if it doesn't exist.
              var store = fs.createWriteStream(fullfilename);
              request(image).pipe(store);
            }
            images.push(image);
            if (!first) {
              banner = 'banner: ' + fullfilename + '\n';
              first = true;
            }
          }
        }
      }
  
      if (tags.length > 0) {
        categories = 'categories: [' + tags.join(", ") + ']\n';
      }
  
      var header = '---\n' +
        'layout: post\n' +
        'title:  "' + item['rss:title']['#'] + '"\n' +
        'author: ' + item['dc:creator']['#'] + '\n' +
        banner +
        categories +
        'medium: ' + item.link + '\n' +
        '---\n\n';
      var published = new Date(item.pubdate);
      var filename = moment(published).format("YYYY-MM-DD") + '-' + string_to_slug(item['rss:title']['#'].substring(0, 20).toLowerCase());
  
      fs.writeFile('./_posts/' + filename + ".md", header + markdown, function (err) {
        if (err) {
          return console.log(err);
        }
        console.log('./_posts/' + filename + ".md" + " saved");
      });
}

/**
 * 
 * @param {*} args 
 */
function main(args){
  var user = "code-for-all";
  var tagged = "";

  if(args.user){
    user = args.user;
  }

  if(args.tag){
    tagged = '/tagged/' + string_to_slug(args.tag)
  }
  console.log("Getting " + 'https://medium.com/feed/'  + user + tagged);
  var req = request('https://medium.com/feed/'  + user + tagged)
  req.on('error', function (error) {
    // handle any request errors
  });
  req.on('response', function (res) {
    var stream = this; // `this` is `req`, which is a stream
  
    if (res.statusCode !== 200) {
      this.emit('error', new Error('Bad status code'));
    } else {
      stream.pipe(feedparser);
    }
  });
  feedparser.on('error', function (error) {
    // always handle errors
    console.log(error);
  });
  
  feedparser.on('readable', function () {
    var stream = this;
    var meta = this.meta;
    var item;
    var i = 0;
    while (item = stream.read()) {
      parseItem(item);
    }
  });
}

program
  .version('0.1.0')
  .option('-u, --user', 'Medium user who\'s posts we want to parse, defaults to \"code-for-all\"')
  .option('-t, --tag <tag>', 'Tag to limit results to, if ommitted, parses all')
  .parse(process.argv);

main(program);


