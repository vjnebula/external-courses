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