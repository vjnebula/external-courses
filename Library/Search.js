var s_input = document.getElementById('search_input');

s_input.addEventListener("search", function() {
	//event.preventDefault();
	if (this.value != "") {
		search_myLib(this.value);
		} else {
			fltrAll();  
		}
	
});

keyup();//initialize search field

function keyup() {
	$("#search_input").keyup(function(){
		$("#search_input").off( "keyup" );
		setTimeout(srch_deb.bind(this), 2000);
	}); 
}//keyup

function srch_deb() {
	keyup();
	if ((this.value != "") && (this.value.length > 2)) {
		search_myLib(this.value);
		} else {
			fltrAll();  
		} 
};//srch_deb

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