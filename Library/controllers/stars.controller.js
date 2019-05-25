function setStarsEvent(){
	var starArr = document.getElementsByClassName('SVGstars');
	for (var s of starArr) {
		s.onmouseenter = setFill;
		s.onmouseleave = clear;
		s.onclick = setRate;
	}
}//setStarsEvent


function setRating(rating = 0, prnt) {
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
			prnt.children[i].onclick = setRate;
			if ( i < (rating*2)) {
				prnt.children[i].style.fill = '#ffab00';
			}
		}
	}
	myLib[cur_id].newRating = rating;
}