function ContentAdd(bk_id, bk_title, bk_author, bk_url) {
	var content_prnt_div = document.getElementById('main_content');
	var newDiv = document.createElement("div");
	newDiv.innerHTML = "<div><img src='" + bk_url + "'></img></div>" + 
		"<div class='book_title'>" + bk_title + "</div>" + 
		"<div class='book_author'>" + bk_author + "</div>" + 
		"<div id='stars_parent'>" + 
			"<svg class='stars'>" + 
				"<use x='00' class='SVGstars' xlink:href='#starSVG' />" + 
				"<use x='15' class='SVGstars' xlink:href='#starSVG' />" +
				"<use x='30' class='SVGstars' xlink:href='#starSVG' />" + 
				"<use x='45' class='SVGstars' xlink:href='#starSVG' />" + 
				"<use x='60' class='SVGstars' xlink:href='#starSVG' />"+
			"</svg>"+
		"</div>";
	newDiv.className = "m_content";
	newDiv.style.display = 'flex';
	newDiv.id = bk_id;
	content_prnt_div.appendChild(newDiv);
	setStarsEvent();
}//ContentAdd

function view() {
	hideAll();
	document.getElementById('main_content').style.flexDirection = 'row';
	document.getElementById('main_content').style.flexWrap = 'wrap';
}//view

function fltrCat(cat_name) {
	view();
	for (var b of myLib) {
		for (var cat of b.categories){
			if (cat == cat_name) {
				document.getElementById(b.id).style.display = 'flex';
			}
		}
	}
}//fltrCat

function fltrAll() {
	view();
	for (var b of myLib) {
				document.getElementById(b.id).style.display = 'flex';
				document.getElementById(b.id).style.order = "";
	}
}//fltrAll

function hideAll() {
	var m_cont = document.getElementsByClassName("m_content");
	for (var i = 0; i < m_cont.length; i++) {
		m_cont[i].style.display = 'none';
	}
}//hideAll

function fltrPopular() {
	fltrAll();
	newHistMesAdd("You used Most Popular filter");
	for (var b of myLib) {
		if (b.rating < 5){
				document.getElementById(b.id).style.display = 'none';
		}
	}
}//fltrPopular

function fltrFree() {
	fltrAll();
	newHistMesAdd("You used Free Books filter");
	for (var b of myLib) {
		if (b.cost > 50){
				document.getElementById(b.id).style.display = 'none';
		}
	}
}//fltrFree

function fltrFavor () {
	view();
	for (var book of myLib) {
		if ( localStorage.getItem(+book.id) ) {
				if (localStorage.getItem(+book.id) > 2 ) {
					document.getElementById(book.id).style.display = 'flex';
				}
		}
	}
}//fltrFavor

function fltrRecent() {
	fltrAll();
	newHistMesAdd("You used Most Recent filter");
	var list = document.getElementById('main_content');
	var items = list.childNodes;
	var itemsArr = [];
	for (var i = 0; i< items.length; i++) {
		if (items[i].id) { 
			itemsArr.push(items[i]);
		}
	}
	
	itemsArr.sort(function(a, b) {
			var a_crt, b_crt;
			for (var book of myLib) {
				if (book.id == a.id){
						//a_crt = book.createdAt;
						a_crt = Math.random();
				}
				if (book.id == b.id){
						//b_crt = book.createdAt;
						b_crt = Math.random();
				}
			};
		var result = a_crt - b_crt;
		return result;
	});//sort
	CheckParam(items, itemsArr, setOrder, checkId);
}//fltrRecent

function newHistMesAdd(message) {
	histArr.push(message);
	localStorage.setItem('histKey', histArr);
	var newHistDiv = document.createElement("div");
	newHistDiv.innerHTML = "<li>" + 
	"<span>" + message
	"</span>";
	newHistDiv.className = "history_item";
	var hist_cont = document.getElementById('history_items');
	hist_cont.insertBefore(newHistDiv, hist_cont.firstChild);
	while(hist_cont.children.length > 3){
		hist_cont.lastChild.remove();
	}
}//newHistMesAdd

function fltrHistory () {
	hideAll();
	histArr.forEach(
		function(item){
			var newHistDiv = document.createElement("div");
			newHistDiv.innerHTML = "<li>" + 
			"<p class='hist_mess'>" + item
			"</p>";
			newHistDiv.className = "m_content history_item";
			var m_c = document.getElementById('main_content');
			m_c.insertBefore(newHistDiv, m_c.firstChild);
			m_c.style.flexDirection = 'column';
			m_c.style.flexWrap = 'nowrap';
		});
}//fltrHistory