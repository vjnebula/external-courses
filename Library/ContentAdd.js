var getfiles = function(){
			
			var f_input = document.getElementById('file-input');
			var bookArr = f_input.files;
			var arrLength = bookArr.length;
			var bookfile;
			//var reader  = new FileReader();
			for (var i = 0; i < arrLength; i++) {
				bookfile = bookArr[i];
				TitleCut = bookfile.name.split(" by ");
				bookUrl = window.URL.createObjectURL(bookfile);
				//alert(window.URL.revokeObjectURL(bookUrl));
				ContentAdd(TitleCut[0], ("by " + TitleCut[1]), bookUrl)
			}
		}
document.getElementById('file-input').onchange = getfiles;

function ContentAdd(bk_title, bk_author, bk_url) {
	var content_prnt_div = document.getElementById('main_content');
	//var bk_title = "Jewels of Nizam";
	//var bk_author = "by Geeta Devi";
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
/* const path = require('path');
const fs = require('fs');
const directoryPath = path.join("book");
alert(directoryPath);
alert(""); */
/* var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","book_cover.png",true);
xmlhttp.send();
alert(xmlhttp.responseText);
 */
var content_prnt_div = document.getElementById('main_content');
	var bk_title = "Cakes & Bakes";
	var bk_author = "by Sanjeev Kapoor";
	var newDiv = document.createElement("div");
	newDiv.innerHTML = "<div><img src='book/Cakes & Bakes by Sanjeev Kapoor.png'></img></div>" + 
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