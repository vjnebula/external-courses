var content_prnt_div = document.getElementById('main_content');
var bk_title = "Jewels of Nizam";
var bk_author = "by Geeta Devi";
var newDiv = document.createElement("div");
newDiv.innerHTML = "<div><img src='book_cover.png'></img></div>" + 
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