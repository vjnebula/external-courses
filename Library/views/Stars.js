function clear () {
		var parentElement = this.parentElement;
		for (var i = 0; i < parentElement.children.length; i++) {
			parentElement.children[i].style.fill = '';
			if (parentElement.children[i] == this ){
				return;
			}
		} 
};//clear

function setFill () {
		var parentElement = this.parentElement;
		for (var i = 0; i < parentElement.children.length; i++) {
			parentElement.children[i].style.fill = '#ffab00';
			if (parentElement.children[i] == this ){
				return;
			}
		}
};//setFill