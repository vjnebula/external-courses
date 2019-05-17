function clear (event) {
		var target = event.target;
		var prnt = target.parentElement;
		for (var i = 0; i<5; i++) {
			prnt.children[i].style.fill = '';
			if (prnt.children[i] == target ){
				return;
			}
		} 
};//clear
function setFill (event) {
		var target = event.target;
		var prnt = target.parentElement;
		//alert(target.children[5]);
		for (var i = 0; i<5; i++) {
			prnt.children[i].style.fill = '#ffab00';
			if (prnt.children[i] == target ){
				return;
			}
		}
};//setFill

function setRate (event) {
		var target = event.target;
		var prnt = target.parentElement;
		if (target.onmouseout == clear) {
			/* for (var i = 0; i<5; i++) {
				prnt.children[i].onmouseout = null;
			} */
			for (var i = 0; i<5; i++) {
				prnt.children[i].style.fill = '#ffab00';
				prnt.children[i].onmouseout = null;
				if (prnt.children[i] == event.target ){
					return;
				}//if
			}//for i
		}//if target clear
		if (target.onmouseout == null) {
			for (var i = 0; i<5; i++) {
				prnt.children[i].style.fill = '';
				prnt.children[i].onmouseout = clear;
				/* if (prnt.children[i] == target ){
					return;
				}//if */
			}//for i
		}//if target null
};//setRate

/* var star1 = document.getElementById('star1');
var star2 = document.getElementById('star2');
var star3 = document.getElementById('star3');
var star4 = document.getElementById('star4');
var star5 = document.getElementById('star5'); */
//var prnt  = document.getElementById('stars_parent');

var starArr = document.getElementsByClassName('SVGstars');
//s = document.getElementById('starSVG');
for (var s of starArr) {
s.onmouseover = setFill;
s.onmouseout = clear;
s.onclick = setRate;
}