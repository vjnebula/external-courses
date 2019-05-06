function clear (event) {
		for (var i = 0; i<5; i++) {
			prnt.children[i].style.background = '';
			if (prnt.children[i] == event.target ){
				return;
			}
		} 
};//clear
function setFill (event) {
		for (var i = 0; i<5; i++) {
			prnt.children[i].style.background = 'yellow';
			if (prnt.children[i] == event.target ){
				return;
			}
		}
};//setFill

function setRate (event) {
		var target = event.target;
		if (target.onmouseout == clear) {
			for (var i = 0; i<5; i++) {
				prnt.children[i].style.background = 'yellow';
				prnt.children[i].onmouseout = null;
				if (prnt.children[i] == event.target ){
					return;
				}//if
			}//for i
		}//if target clear
		if (target.onmouseout == null) {
			for (var i = 0; i<5; i++) {
				prnt.children[i].style.background = '';
				prnt.children[i].onmouseout = clear;
				/* if (prnt.children[i] == target ){
					return;
				}//if */
			}//for i
		}//if target null
};//setRate

var star1 = document.getElementById('star1');
var star2 = document.getElementById('star2');
var star3 = document.getElementById('star3');
var star4 = document.getElementById('star4');
var star5 = document.getElementById('star5');
var prnt  = document.getElementById('parent');

var starArr = document.getElementsByClassName('stars');
//starArr = starArr.slice();
for (var s of starArr) {
s.onmouseover = setFill;
s.onmouseout = clear;
s.onclick = setRate;
}