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
		var cur_id = prnt.parentElement.parentElement.id;
		
		if (target.onmouseout == clear) {
			for (var i = 0; i<5; i++) {
				prnt.children[i].onmouseout = null;
				prnt.children[i].onmouseover = null;
			} 
			for (var i = 0; i<5; i++) {
				prnt.children[i].style.fill = '#ffab00';
				prnt.children[i].onmouseout = null;
				if (prnt.children[i] == event.target ){
					for (var b of myLib) { 
						if (b.id == cur_id) {
							b.rating = i+1;
							newHistMesAdd("You set new rating of " + b.rating + " stars for " + b.title );
							localStorage.setItem(+b.id, b.rating);
							}
					}
					
					return;
				}//if
			}//for i
		}//if target clear
		if (target.onmouseout == null) {
			for (var i = 0; i<5; i++) {
				prnt.children[i].style.fill = '';
				prnt.children[i].onmouseout = clear;
				prnt.children[i].onmouseover = setFill;
			}//for i
			for (var b of myLib) { 
					if (b.id == cur_id) {
						b.rating = 0;
						newHistMesAdd("You set new rating of " + b.rating + " stars for " + b.title );
						localStorage.setItem(+b.id, b.rating);
					}
			}
		}//if target null
};//setRate