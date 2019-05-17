var myLib = {};

//function req(){
var requestURL = 'https://rsu-library-api.herokuapp.com/books';
var request = new XMLHttpRequest();
//request.responseType = 'text';
request.open('GET', requestURL, false);



request.onload = function() {
  myLib = JSON.parse(request.responseText);
  //return myLib;
  //alert(myLib);
}
request.send();

