// Creates server
var express = require('express');
var app = express();

// Dir for static files
app.use(express.static(__dirname + '/static'));

// Dir/Application of Templating
app.set('views', __dirname + '/views');;
app.set('view engine', 'ejs')

app.get('/cats', function(request, response) {
    response.render('cats');
})

app.get('/cuddles', function(request, response) {
    var cat_info = 
    {
        name: "Cuddles",
        img: "./images/cat1.jpg",
        fav_food: "Spaghetti",
        age: "3",
        sleeping_spots:
        [
            "under the bed",
            "in a sunbeam"
        ]
    };
    response.render('details', {cat: cat_info});
})

app.get('/mr_whiskers', function(request, response) {
    var cat_info = 
    {
        name: "Mr. Whiskers",
        img: "./images/cat2.jpg",
        fav_food: "Pizza",
        age: "10",
        sleeping_spots:
        [
            "on your feet",
            "in the dirt clothes",
            "in front of the television"
        ]
    };
    response.render('details', {cat: cat_info});
})

app.get('/arthur', function(request, response) {
    var cat_info = 
    {
        name: "Arthur",
        img: "./images/cat3.jpg",
        fav_food: "Whatever your eating...",
        age: "1",
        sleeping_spots:
        [
            "where you least expect it..."
        ]
    };
    response.render('details', {cat: cat_info});
})

// Port listner
app.listen(8000, function() {
    console.log('listening on port 8000...')
})