//Modulos requeridos
const argv = require('yargs').argv;
var http = require('http');
var Twitter = require('twitter');
const fs = require('fs');

//Creamos una instancia y asignamos las keys
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

let hashtag = argv.c;
//console.log(hashtag);
// EL OBJETO (statuses) devuelve .created_at .text ,etc..
client.get('search/tweets', {q: `#${hashtag}`}, function(error, tweets, response) {
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'} , {'Content-Type': 'text/css'});
    var css = fs.readFileSync('styles.css', {encoding: 'utf8'});  //leemos un archivo externo

res.write('<html>');
    res.write('<head>');
      res.write('<meta charset="utf-8">');
      res.write('<style type="text/css">');
      res.write(css);
      res.write('</style>');
    res.write('</head>');
res.write('<body>');
  res.write(`<h2>Últimos Tweets del hashtag #${hashtag}</h2>`)
tweets.statuses.forEach(function(tweet){ //recorremos con un bucle el objeto statuses entrando en varias propiedades

res.write("<blockquote class='twitter-tweet'>");

  res.write(`<pre>Hora:${tweet.created_at} Escrito con ${tweet.source} </pre>`);
  res.write(`Por el Usuario: ${tweet.user.name}`);
    res.write("<p>");
      res.write(`Escribio: ${tweet.text}`);
    res.write("</p>");

res.write("</blockquote>");
});
res.write('</body>');
res.write('</html>');
res.end();

}).listen(8080);

}); //final client
