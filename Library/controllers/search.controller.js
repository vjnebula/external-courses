var s_input = document.getElementById('search_input');

s_input.addEventListener("search", function() {
	if (this.value != "") {
		newHistoryMessageAdd("You has searched for " + this.value);
		search_myLib(this.value);
		} else {
			fltrAll();
		}
	
});

keyup();//initialize search field

function search_myLib(search_string) {

	for (var b in myLib) {
			var cur_book = document.getElementById(b);
			
			//if book is visible, search in book title + author
			if (cur_book.style.display != 'none' ) {
				var compound_string = myLib[b].title + myLib[b].authorFullName;
				if (compound_string.toLowerCase().search(search_string.toLowerCase()) > -1) {
					cur_book.style.display = 'flex';
				} else { 
					cur_book.style.display = 'none'; 
				}
				
			}
			
	}
}