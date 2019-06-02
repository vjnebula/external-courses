function setRating(rating = 0, starsParent) {
	var cur_id = starsParent.parentElement.parentElement.id;
	if ( rating <= 0  ) {
		for (var i = 0; i < starsParent.children.length; i++) {
			starsParent.children[i].style.fill = '';
			starsParent.children[i].onmouseleave = clear;
			starsParent.children[i].onmouseenter = setFill;
			starsParent.children[i].onclick = setRate;
		}//for i
	} else {
		for (var i = 0; i < starsParent.children.length; i++) {
			starsParent.children[i].onmouseleave = null;
			starsParent.children[i].onmouseenter = null;
			starsParent.children[i].onclick = setRate;
			if ( i < (rating*2)) {
				starsParent.children[i].style.fill = '#ffab00';
			}
		}
	}
	myLib[cur_id].newRating = rating;
}