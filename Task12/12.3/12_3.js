function clear () {
		var prnt = this.parentElement;
		for (var i = 0; i < prnt.children.length; i++) {
			prnt.children[i].style.fill = '';
			if (prnt.children[i] == this ){
				return;
			}
		} 
};//clear

function setFill () {
		var prnt = this.parentElement;
		for (var i = 0; i < prnt.children.length; i++) {
			prnt.children[i].style.fill = '#ffab00';
			if (prnt.children[i] == this ){
				return;
			}
		}
};//setFill

function setRating(rating, prnt) {
	var cur_id = prnt.parentElement.parentElement.id;
	var prntLngth = prnt.children.length;
	if ( rating <= 0  ) {
		for (var i = 0; i < prntLngth; i++) {
			prnt.children[i].style.fill = '';
			prnt.children[i].onmouseleave = clear;
			prnt.children[i].onmouseenter = setFill;
		}//for i
	} else {
		for (var i = 0; i < prntLngth; i++) {
			prnt.children[i].onmouseleave = null;
			prnt.children[i].onmouseenter = null;
			if ( i < (rating*2)) {
				prnt.children[i].style.fill = '#ffab00';
			}
		}
	}
}


function setRate() {
		var prnt = this.parentElement;
		var prntLngth = prnt.children.length;
		if (this.onmouseleave == clear) {
			for (var i = 0; i < prntLngth; i++) {
				if (prnt.children[i] == this ){
					setRating((i+1)/2, prnt);
					return;
				}//if
			}//for i
		}//if target clear
		if (this.onmouseleave == null) {
			setRating(0, prnt);
		}//if target null
};//setRate

var starArr = document.getElementsByClassName('SVGstars');
for (var s of starArr) {
	s.onmouseenter = setFill;
	s.onmouseleave = clear;
	s.onclick = setRate;
}