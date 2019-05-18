var myLib = {};


/* var requestURL = 'https://rsu-library-api.herokuapp.com/books';
var request = new XMLHttpRequest();
request.open('GET', requestURL, false);

request.onload = function() {
  myLib = JSON.parse(request.responseText);
}
request.send();
 */
var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
var requestURL = 'https://rsu-library-api.herokuapp.com/books';
//var myRequest = new XMLHttpRequest('GET', requestURL, false);

var myRequest = new Request('https://rsu-library-api.herokuapp.com/books', myInit);

fetch(myRequest).then(function(response) {
  return response.json();
}).then(function(data) {
	JSON.stringify(data);
	myLib = data;
}); 