
var movie = require("./movie");
var threeFavoriteMovies = ["The Other Guys", "Wedding Crashers", "The Hangover"];
var formattedMovieTitle;
threeFavoriteMovies.forEach(function(film){
	formatMovieString(film, " ", "+");
 	movie(formattedMovieTitle);
});

function formatMovieString(str, find, replace) {
	formattedMovieTitle = str.replace(new RegExp(find, 'g'), replace);
	console.log(formattedMovieTitle);
	return formattedMovieTitle;
}

//googleSearchEngineId = 010696124849279591183:hjjm3pirm1m

//key = AIzaSyDbRZ-Iko61aIRbhT-pdxW3d-O75aGH3XM

//https://www.googleapis.com/customsearch/v1?key=AIzaSyDbRZ-Iko61aIRbhT-pdxW3d-O75aGH3XM&cx=010696124849279591183:hjjm3pirm1m&q=face+off+movie

module.exports = threeFavoriteMovies;