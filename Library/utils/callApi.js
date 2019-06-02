var myHeaders = new Headers({
  "Content-Type": "application/json",
  'Accept': 'application/json'
});
var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
var requestURL = 'https://rsu-library-api.herokuapp.com/books';

var myRequest = new Request('https://rsu-library-api.herokuapp.com/books', myInit);

fetch(myRequest).then(function(response) {
						return response.json();
							}).then(function(data) {
									for (var key of data) {
										createBook (Book, key.id, key.title, key.author, key.rating, key.cost, key.categories, key.createdAt, key.updatedAt, key.image_url);
									}
								}).then(function(){
									parseMyLib();
									}).then(function (){
										setTimeout(preloaderOff,500);
									}).catch(function(ex) {
										console.log('parsing failed', ex);
										var request = new XMLHttpRequest();
										var requestURL = "https://rsu-library-api.herokuapp.com/books";
										request.open('GET', requestURL, true);
										request.onload = function() {
											loadBooks(JSON.parse(request.responseText));
										}
										request.send();
									});

function loadBooks (data) {
	for (var key of data) {
		createBook (Book, key.id, key.title, key.author, key.rating, key.cost, key.categories, key.createdAt, key.updatedAt, key.image_url);
	}
	parseMyLib();
	setTimeout(preloaderOff,500);
}
