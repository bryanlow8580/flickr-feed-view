// Imports
import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';

// URL to fetch from 
const feed = new URL('https://api.flickr.com/services/feeds/photos_public.gne/images?q=nature&format=json&nojsoncallback=1');

// tried to get by querying, didnt work
/*
const params = new URLSearchParams();
params.append('q', 'nature');
params.append('format', 'json');
*/

// Get data from URL response 
const response = await fetch(feed, {method: 'GET'});
const data = await response.json();

// testing to check data received
//console.log(data);

const app = express();
const port = 8080;

// enable cors to allow data to be fetched
app.use(cors({
    origin: "*"
}));

// Callback function invoked from GET request
app.get('/', function(req, res) {
  res.send(data);
});

// Set up server
var server = app.listen(port, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});