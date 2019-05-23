function keyup() {
	s_input.onkeyup = function(){
		s_input.onkeyup = null;
		setTimeout(srch_deb.bind(this), 2000);
	}; 
}//keyup

function srch_deb() {
	keyup();
	if ((this.value != "") && (this.value.length > 2)) {
		search_myLib(this.value);
		} else {
			fltrAll();  
		} 
};//srch_deb