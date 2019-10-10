// Express configuration
var express = require('express');
var app = express();
var port = 8888;
app.set('view engine', 'ejs');

// MongoDB configuration
var MongoClient = require('mongodb').MongoClient;
var noteDbClient = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true });
var db;
noteDbClient.connect(function(err) {
    if(err) {
        console.log("Houston we have a (database) problem!");
    } else {
        db = noteDbClient.db("noteDb");
        console.log("Database connection pool successfully created");
    }
});

// Body Parser configuration
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));



// Routes
app.get('/send-example', function(req, res) {
    res.send(`<p>${req.query.data}</p>`);
});

app.get('/note', function(req, res) {
    noteDbClient.connect(function(err) {
        var db = noteDbClient.db("noteDb");
        db.collection('note').find().toArray(function(err, notes) {
            if(!err) {
                res.render('note', {notes: notes});
            }
        });
    });    
});

app.post('/note', function(req, res) {
    noteDbClient.connect(function(err) {
        var db = noteDbClient.db("noteDb");
        db.collection('note').insertOne({note: req.body.note}, function(err, notes) {
            if(!err) {
                console.log("Note added!");
            }            
        });
    });
    
    res.redirect('/note');
});


// Bind listener for connections
app.listen(port, function() {
    console.log(`Starting Node.js server on port ${port}`);
});