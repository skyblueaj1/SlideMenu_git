var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/SlidePushMenus'));

// views is directory for all template files
app.set('SlidePushMenus', __dirname + '/SlidePushMenus');
//app.set('view engine', 'ejs');
app.set('view engine', 'html');
//app.engine('html',require('ejs').renderFile);


app.get('/', function(request, response) {
  response.render('SlidePushMenus/index')
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


