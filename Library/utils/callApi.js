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
									JSON.data;
									for (var key of data) {
										createBook (Book, key.id, key.title, key.author, key.rating, key.cost, key.categories, key.createdAt, key.updatedAt, key.image_url);
									}
								}).then(function(){
									parseMyLib();
									}).then(function (){
										setTimeout(preloaderOff,500);
									}).catch(function(ex) {
										alert('parsing failed', ex)
									});
								


