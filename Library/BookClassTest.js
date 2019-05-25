class Book {
	constructor(id, title, author, rating, cost, categories, createdAt, updatedAt, image_url) {
		this.id = id;
		this.title = title;
		this.author = author;
		this.rating = rating;
		this.cost = cost;
		this.categories = categories;
		this.createdAt = createdAt;//
		this.updatedAt = updatedAt;//
		this.image_url = image_url;//
	}
	
	get authorFullName() {
		return this.author.firstName + " " + this.author.lastName;
	}
	
	set authorFullName(nameStr) {
		[this.author.firstName, this.author.lastName] = nameStr.split(" ");
	}


}//class Book

//let book = new Book (1,"Jewels of Nizam",{"firstName":"Geeta","lastName":"Devi"},5,100,["must_read","best","non_fiction"],1506943763424,1528046197707,"http://rsu-library-api.herokuapp.com/static/images/1.jpg");
var allBooks = {};

function createABook (ABook, $id, $title, $author, $rating, $cost, $categories, $createdAt, $updatedAt, $image_url){
	let book = new ABook($id, $title, $author, $rating, $cost, $categories, $createdAt, $updatedAt, $image_url);

	allBooks[book.id] = book;
	return book;
}//createABook


/* function createABook (ABook, 1,"Jewels of Nizam",{"firstName":"Geeta","lastName":"Devi"},5,100,["must_read","best","non_fiction"],1506943763424,1528046197707,"http://rsu-library-api.herokuapp.com/static/images/1.jpg"){
	let book = new ABook($id, $title, $author, $rating, $cost, $categories, $createdAt, $updatedAt, $image_url);

	allBooks[book.id] = book;
	return book;
}//createABook */