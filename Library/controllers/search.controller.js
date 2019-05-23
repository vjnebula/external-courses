var s_input = document.getElementById('search_input');

s_input.addEventListener("search", function() {
	//event.preventDefault();
	if (this.value != "") {
		newHistMesAdd("You has searched for " + this.value);
		search_myLib(this.value);
		} else {
			fltrAll();  
		}
	
});

keyup();//initialize search field

function search_myLib(s_str) {

	for (var b of myLib) {
			var cur_book = document.getElementById(b.id);
			
			//if book is visible, search in book title + author
			if (cur_book.style.display != 'none' ) {
				var compound_str = b.title + " " + b.author.firstName + " " + b.author.lastName;
				if (compound_str.toLowerCase().search(s_str.toLowerCase()) > -1) {
					cur_book.style.display = 'flex';
				} else { 
					cur_book.style.display = 'none'; 
				}
				
			}
			
	}
}