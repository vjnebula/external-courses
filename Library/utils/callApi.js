var myHeaders = new Headers({
  "Content-Type": "application/json",
  'Accept': 'application/json'
});
var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
var requestURL = 'https://rsu-library-api.herokuapp.com/books';
//var myRequest = new XMLHttpRequest('GET', requestURL, false);

var myRequest = new Request('https://rsu-library-api.herokuapp.com/books', myInit);

/* fetch(myRequest).then(function(response) {
						return response.json();
							}).then(function(data) {
								JSON.stringify(data);
								return myLib = data;
								//lib = data;
									}).then(function(myLib) {
											for (var d of myLib) {
											var bk_author = d.author.firstName + " " + d.author.lastName;
											ContentAdd(d.id, d.title, bk_author, d.image_url);
											}
										}
); */
//$id, $title, $author, $rating, $cost, $categories, $createdAt, $updatedAt, $image_url
fetch(myRequest).then(function(response) {
						return response.json();
							}).then(function(data) {
									JSON.stringify(data);
									for (var d of data) {
										createABook (Book, d.id, d.title, d.author, d.rating, d.cost, d.categories, d.createdAt, d.updatedAt, d.image_url);
									}
								}).then(function(){
									parseMyLib();
									});
								


