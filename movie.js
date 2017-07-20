'use strict'

var credentials = require("./env.js");

function get(movieTitle) { 
	console.log(movieTitle);
	console.log(credentials.apiKey);
	console.log(credentials.customSearchEngineID);
	const url = "https://www.googleapis.com/customsearch/v1?key=" + credentials.apiKey + "&cx=" + credentials.customSearchEngineID + "&q=" + movieTitle + "+movie";
	
	console.log(url);
	var request = require("request");
	var googleSearchURL = url + movieTitle;
	// var googleSearchURL = "https://www.googleapis.com/customsearch/v1?key=AIzaSyDbRZ-Iko61aIRbhT-pdxW3d-O75aGH3XM&cx=010696124849279591183:hjjm3pirm1m&q=face+off+movie";
	request(googleSearchURL, function(error, response, body) {
		//console.log(body);
		console.log(body);
		var parsedJSON = JSON.parse(body).items;
		for(var i = 0; i < parsedJSON.length; i++) {
			console.log(parsedJSON[i].snippet);
		}
		for (var i = 0; i < parsedJSON.length; i++) {
			var jsonResult =  parsedJSON[i].link
			if (jsonResult.includes("imdb")) {
				console.log(jsonResult);
			} else {
				console.log("does not contain imdb");
			}
		}
	});
}

module.exports = get;