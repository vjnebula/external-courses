function setStarsEvent(){
var starArr = document.getElementsByClassName('SVGstars');
for (var s of starArr) {
	s.onmouseover = setFill;
	s.onmouseout = clear;
	s.onclick = setRate;
}
}