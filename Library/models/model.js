var histArr = [];
if ( localStorage.getItem('histKey') ) {
	histArr = localStorage.getItem('histKey').split(",").splice(-10,10);
}

class Book {
	constructor(id, title, author, rating, cost, categories, createdAt, updatedAt, image_url) {
		this.id = id;
		this.title = title;
		this.author = author;
		this.rating = rating;
		this.cost = cost;
		this.categories = categories;
		this.createdAt = new Date();//
		this.updatedAt = new Date();//
		this.image_url = image_url;//
	}
	
	get authorFullName() {
		return this.author.firstName + " " + this.author.lastName;
	}
	
	set authorFullName(nameStr) {
		[this.author.firstName, this.author.lastName] = nameStr.split(" ");
	}
	
	set updAt(dt) {
		return this.updatedAt = dt;
	}
	
	set newRating(number) {
		this.rating = number;
		newHistoryMessageAdd("You set new rating of " + this.rating + " stars for " + this.title );
		sessionStorage.setItem(+this.id, this.rating);
	}
	
	getCat(cat_name) {
		for (var cat of this.categories){
			if (cat === cat_name) { return true;}
				else {return false}
		}
	}
};//class Book


var myLib = {};

function createBook (Book, id, title, author, rating, cost, categories, createdAt, updatedAt, image_url){
	let book = new Book(id, title, author, rating, cost, categories, createdAt, updatedAt, image_url);

	myLib[book.id] = book;
}//createBook


function parseMyLib() {
	for (var book in myLib){
		ContentAdd(myLib[book]);
		}
}



function checkId (col_item, arr_item) {
		return col_item.id === arr_item.id;
}

function setOrder(col_item, arr_item, index, cb) {
	if (cb(col_item, arr_item)){
		col_item.style.order = +index;
	}
}

function CheckParam (collection, arr, cb, cb2) {
	for (var k = 1; k < collection.length; k++) {
		for (var c = 0; c < arr.length; c++) {
			cb(collection[k], arr[c], c, cb2);
		}
	}
}