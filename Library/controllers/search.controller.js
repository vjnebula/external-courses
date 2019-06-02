var searchInput = document.querySelector('.search_input');

searchInput.addEventListener("search", function() {
	if (this.value !== "") {
		newHistoryMessageAdd("You has searched for " + this.value);
		search_myLib(this.value);
		} else {
			fltrAll();
		}
	
});

keyup();//initialize search field

function keyup() {
	searchInput.onkeyup = function(){
	searchInput.onkeyup = null;
	debounce(srch_deb.bind(this));
	}; 
}//keyup

function srch_deb() {
	keyup();
	if ((this.value !== "") && (this.value.length > 2)) {
		search_myLib(this.value);
		} else {
			fltrAll();  
		} 
};//srch_deb

function search_myLib(search_string) {

	for (var book in myLib) {
			var cur_book = document.getElementById(book);
			//if book is visible, search in book title + author
			if (cur_book.style.display != 'none' ) {
				var compound_string = myLib[book].title + myLib[book].authorFullName;
				if (compound_string.toLowerCase().search(search_string.toLowerCase()) > -1) {
					cur_book.style.display = 'flex';
				} else { 
					cur_book.style.display = 'none'; 
				}
				
			}
			
	}
}