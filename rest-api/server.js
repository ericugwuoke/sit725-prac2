var express = require('express');
var app = express();
app.set('port', process.env.PORT || 8080);

var accounts = [
    {id:1,name:'alex',deposit:5},
    {id:2,name:'sarah',deposit:5},
    {id:3,name:'jim',deposit:15}
];


app.get('/toursall', function(req, res) {

    res.json(accounts);
});


app.get('/accounts/:id?', function(req, res) {
   responsetours = req.params.id !== undefined ?
       accounts.filter(     function(obj)   {return obj.id== req.params.id} )
       : accounts;
   res.json(responsetours );
});


app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});
app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
});