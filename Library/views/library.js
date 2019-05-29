function ContentAdd(bk) {
	var newDiv = document.createElement("div");
	newDiv.innerHTML = "<div><img src='" + bk.image_url + "'></img></div>" + 
		"<div class='book_title'>" + bk.title + "</div>" + 
		"<div class='book_author'>" + bk.authorFullName+ "</div>" +
		"<div class='stars_parent'>" + 
			"<svg class='stars' pointer-events='bounding-box'>" + 
				"<use x='00' class='SVGstars' xlink:href='#stL' />" + 
				"<use x='00' class='SVGstars' xlink:href='#stR' />" + 
				"<use x='15' class='SVGstars' xlink:href='#stL' />" + 
				"<use x='15' class='SVGstars' xlink:href='#stR' />" + 
				"<use x='30' class='SVGstars' xlink:href='#stL' />" + 
				"<use x='30' class='SVGstars' xlink:href='#stR' />" + 
				"<use x='45' class='SVGstars' xlink:href='#stL' />" + 
				"<use x='45' class='SVGstars' xlink:href='#stR' />" + 
				"<use x='60' class='SVGstars' xlink:href='#stL' />" + 
				"<use x='60' class='SVGstars' xlink:href='#stR' />" + 
			"</svg>"+
		"</div>";
	newDiv.className = 'book_content';
	newDiv.style.display = 'flex';
	newDiv.id = bk.id;
	document.querySelector('.main_content').appendChild(newDiv);
	var bkRating = bk.rating;
	if ( sessionStorage.getItem(bk.id) ){
		bkRating = sessionStorage.getItem(bk.id);
	}
	setRating(bkRating, newDiv.childNodes[3].childNodes[0]);
}//ContentAdd

function view() {
	hideAll();
	document.querySelector('.main_content').style.flexDirection = 'row';
	document.querySelector('.main_content').style.flexWrap = 'wrap';
}//view

function fltrCat(cat_name) {
	view();
	for (var book in myLib) {
		if (myLib[book].getCat(cat_name)) {
				document.getElementById(myLib[book].id).style.display = 'flex';
			}
		}
}//fltrCat

function fltrAll() {
	view();
	for (var book in myLib) {
				document.getElementById(myLib[book].id).style.display = 'flex';
				document.getElementById(myLib[book].id).style.order = "";
	}
}//fltrAll

function hideAll() {
	var content = document.getElementsByClassName("book_content");
	for (var i = 0; i < content.length; i++) {
		content[i].style.display = 'none';
	}
}//hideAll

function fltrPopular() {
	fltrAll();
	newHistoryMessageAdd("You used Most Popular filter");
	for (var book in myLib) {
		if (myLib[book].rating < 5){
				document.getElementById(myLib[book].id).style.display = 'none';
		}
	}
}//fltrPopular

function fltrFree() {
	fltrAll();
	newHistoryMessageAdd("You used Free Books filter");
	for (var book in myLib) {
		if (myLib[book].cost > 50){
				document.getElementById(myLib[book].id).style.display = 'none';
		}
	}
}//fltrFree

function fltrFavourite () {
	hideAll();
	for (var book in myLib) {
		var id = myLib[book].id;
		if ( sessionStorage.getItem(+id) ) {
				if (sessionStorage.getItem(+id) > 4 ) {
					document.getElementById(id).style.display = 'flex';
				}
		}
	}
}//fltrFavourite

function fltrRecent() {
	fltrAll();
	newHistoryMessageAdd("You used Most Recent filter");
	var list = document.querySelector('.main_content');
	var items = list.childNodes;
	var itemsArr = [];
	for (var i = 0; i< items.length; i++) {
		if (items[i].id) { 
			itemsArr.push(items[i]);
		}
	}
	itemsArr.sort(function(a, b) {
			var a_crt, b_crt;
			for (var book in myLib) {
				if (myLib[book].id == a.id){
						//a_crt = myLib[book].createdAt;
						a_crt = Math.random();
				}
				if (myLib[book].id == b.id){
						//b_crt = myLib[book].createdAt;
						b_crt = Math.random();
				}
			};
		var result = a_crt - b_crt;
		return result;
	});//sort
	CheckParam(items, itemsArr, setOrder, checkId);
}//fltrRecent

function newHistoryMessageAdd(message) {
	histArr.push(message);
	localStorage.setItem('histKey', histArr);
	var newHistDiv = document.createElement("div");
	newHistDiv.innerHTML = `<li><span>${message}</span>`;
	newHistDiv.className = "history_item";
	var history_content = document.querySelector('.history_items');
	history_content.insertBefore(newHistDiv, history_content.firstChild);
	while(history_content.children.length > 3){
		history_content.lastChild.remove();
	}
}//newHistoryMessageAdd

function fltrHistory () {
	hideAll();
	histArr.forEach(
		function(item){
			var newHistDiv = document.createElement("div");
			newHistDiv.innerHTML = `<span class='main_history hist_mess'>
										<svg><use class='svg_gray' xlink:href='#history_svg'/></svg>
										${item}
									</span>`;
			newHistDiv.className = "book_content history_item";
			var contents = document.querySelector('.main_content');
			contents.insertBefore(newHistDiv, contents.firstChild);
			contents.style.flexDirection = 'column';
			contents.style.flexWrap = 'nowrap';
		});
}//fltrHistory

function preloaderOff() {
	var spheres = document.getElementsByClassName('sphere');
	for (var sphere of spheres) {
		sphere.style.display = 'none'
	}
	document.querySelector('.space').style.animationName = "";
}

function showHelp() {
	hideAll();
	var newHelpDiv = document.createElement("div");
	newHelpDiv.innerHTML = myHelp;
	newHelpDiv.className = "book_content m_help"
	var contents = document.querySelector('.main_content');
	contents.appendChild(newHelpDiv);
	contents.style.flexDirection = 'column';
	contents.style.flexWrap = 'nowrap';
}