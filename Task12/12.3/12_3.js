function clear (event) {
	  var target = event.target;
	  target.style.background = '';
	  
};
function setFill (event) {
	//var starArr = document.getElementsByClassName('stars');
	
	  var target = event.target;
	  target.style.background = 'yellow';

};

var star1 = document.getElementById('star1');
var star2 = document.getElementById('star2');
var star3 = document.getElementById('star3');
var star4 = document.getElementById('star4');
var star5 = document.getElementById('star5');

var starArr = document.getElementsByClassName('stars');
for (var s of starArr) {
s.onmouseover = setFill;
s.onmouseout = clear;
}


star1.onmouseover = setFill;
star1.onmouseout = clear;

star1.onclick = function(event) {
	var target = event.target;
	
	if (star1.onmouseout == clear) {
		star1.style.background = 'yellow';
		star1.onmouseout = null;
		return;
	}
	if (star1.onmouseout == null) {
		star1.style.background = '';
		star1.onmouseout = clear;
	}
}

star2.onmouseover = function(event) {
	  var target = event.target;
	  target.style.background = 'yellow';
	  star1.style.background = 'yellow';
	  
};

star2.onmouseout = function(event) {
	  var target = event.target;
	  target.style.background = '';
	  star1.style.background = '';
	  
};

star3.onmouseover = function(event) {
	  var target = event.target;
	  target.style.background = 'yellow';
	  star1.style.background = 'yellow';
	  star2.style.background = 'yellow';
	  
};

star3.onmouseout = function(event) {
	  var target = event.target;
	  target.style.background = '';
	  star1.style.background = '';
	  star2.style.background = '';
	  
};

star4.onmouseover = function(event) {
	  var target = event.target;
	  target.style.background = 'yellow';
	  star1.style.background = 'yellow';
	  star2.style.background = 'yellow';
	  star3.style.background = 'yellow';
	  
};

star4.onmouseout = function(event) {
	  var target = event.target;
	  target.style.background = '';
	  star1.style.background = '';
	  star2.style.background = '';
	  star3.style.background = '';
	  
};

star5.onmouseover = function(event) {
	  var target = event.target;
	  target.style.background = 'yellow';
	  star1.style.background = 'yellow';
	  star2.style.background = 'yellow';
	  star3.style.background = 'yellow';
	  star4.style.background = 'yellow';
	  
};

star5.onmouseout = function(event) {
	  var target = event.target;
	  target.style.background = '';
	  star1.style.background = '';
	  star2.style.background = '';
	  star3.style.background = '';
	  star4.style.background = '';
	  
};