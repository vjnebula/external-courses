
var myLib = {};

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
								return myLib = data;
								//lib = data;
									}).then(function(myLib) {
											for (var d of myLib) {
											var bk_author = d.author.firstName + " " + d.author.lastName;
											ContentAdd(d.id, d.title, bk_author, d.image_url);
											}
										}
);

var getfiles = function(){
			
			var f_input = document.getElementById('file-input');
			var bookArr = f_input.files;
			var arrLength = bookArr.length;
			var bookfile;
			for (var i = 0; i < arrLength; i++) {
				bookfile = bookArr[i];
				TitleCut = bookfile.name.split(" by ");
				bookUrl = window.URL.createObjectURL(bookfile);
				var bk_id = myLib.length+1;
				TitleCut[1] = TitleCut[1].replace(".png", " ");
				ContentAdd(bk_id, TitleCut[0], ("by " + TitleCut[1]), bookUrl);
				var newAuthor = TitleCut[1].split(" ");
				var newBook = {"id":bk_id, "title":TitleCut[0],"author":{"firstName":newAuthor[0],"lastName":newAuthor[1]},"rating":3,"cost":0,"categories":["must_read","best","non_fiction"],"createdAt":1506943763424,"updatedAt":1528046197707,"image_url":bookUrl};
				myLib.push(newBook);
				newHistMesAdd("You added new book " + TitleCut[0]);
			}
		}
document.getElementById('file-input').onchange = getfiles;

function ContentAdd(bk_id, bk_title, bk_author, bk_url) {
	var content_prnt_div = document.getElementById('main_content');
	var newDiv = document.createElement("div");
	newDiv.innerHTML = "<div><img src='" + bk_url + "'></img></div>" + 
		"<div class='book_title'>" + bk_title + "</div>" + 
		"<div class='book_author'>" + bk_author + "</div>" + 
		"<div id='stars_parent'>" + 
			"<svg class='stars' width='75' height='15' viewBox='0 0 75 15'>" + 
				"<use x='00' class='SVGstars' xlink:href='#starSVG' />" + 
				"<use x='15' class='SVGstars' xlink:href='#starSVG' />" +
				"<use x='30' class='SVGstars' xlink:href='#starSVG' />" + 
				"<use x='45' class='SVGstars' xlink:href='#starSVG' />" + 
				"<use x='60' class='SVGstars' xlink:href='#starSVG' />"+
			"</svg>"+
		"</div>";
	newDiv.className = "m_content";
	newDiv.style.display = 'flex';
	newDiv.id = bk_id;
	content_prnt_div.appendChild(newDiv);
	//newDiv = document.createElement('div');
	//var tempText = document.createTextNode("Jewels of Nizam");
	//newDiv.appendChild(tempText);
	//document.content_div.appendChild(newDiv);
	var starArr = document.getElementsByClassName('SVGstars');
	//s = document.getElementById('starSVG');
	for (var s of starArr) {
	s.onmouseover = setFill;
	s.onmouseout = clear;
	s.onclick = setRate;
	}
}
 
 
var starArr = document.getElementsByClassName('SVGstars');
	//s = document.getElementById('starSVG');
	for (var s of starArr) {
		s.onmouseover = setFill;
		s.onmouseout = clear;
		s.onclick = setRate;
	} 

var histArr = [];
//histArr.length = 10; 
 
