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
									JSON.stringify(data);
									for (var d of data) {
										createABook (Book, d.id, d.title, d.author, d.rating, d.cost, d.categories, d.createdAt, d.updatedAt, d.image_url);
									}
								}).then(function(){
									parseMyLib();
									}).then(function (){
										setTimeout(preloaderOff,500);
									});
								


