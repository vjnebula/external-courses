//var fltr = document.getElementById('f_recent');

document.getElementById('f_recent').onclick = fltrRecent;
document.getElementById('f_favourite').onclick = fltrFavor;
document.getElementById('f_nowReading').onclick = fltrNowReading;
document.getElementById('f_free').onclick = fltrFree;
document.getElementById('f_best').onclick = fltrBest;
document.getElementById('f_all').onclick = fltrAll;
document.getElementById('m_browse').onclick = fltrAll;
document.getElementById('f_non_fiction').onclick = fltrNonFiction;
document.getElementById('f_classic').onclick = fltrClassic;
document.getElementById('f_must').onclick = fltrMust;
document.getElementById('f_popular').onclick = fltrPopular;
document.getElementById('m_history').onclick = fltrHistory;

function view() {
	hideAll();
	document.getElementById('main_content').style.flexDirection = 'row';
	document.getElementById('main_content').style.flexWrap = 'wrap';
}

function fltrCat(cat_name) {
	view();
	for (var b of myLib) {
		for (var cat of b.categories){
			if (cat == cat_name) {
				document.getElementById(b.id).style.display = 'flex';
			}
		}
	}
}

function fltrAll() {
	view();
	for (var b of myLib) {
				//alert(b.id + " " + b.categories);
				document.getElementById(b.id).style.display = 'flex';
				document.getElementById(b.id).style.order = "";
	}
}

function hideAll() {
	/* for (var b of myLib) {
				document.getElementById(b.id).style.display = 'none';
	} */
	var m_cont = document.getElementsByClassName("m_content");
	for (var i = 0; i < m_cont.length; i++) {
		m_cont[i].style.display = 'none';
	}
}



function fltrPopular() {
	fltrAll();
	newHistMesAdd("You used Most Popular filter");
	for (var b of myLib) {
		if (b.rating < 5){
				document.getElementById(b.id).style.display = 'none';
		}
	}
}

function fltrFree() {
	fltrAll();
	newHistMesAdd("You used Free Books filter");
	for (var b of myLib) {
		if (b.cost > 50){
				document.getElementById(b.id).style.display = 'none';
		}
	}
}

function fltrMust() {
	fltrCat("must_read");
	newHistMesAdd("You used Must Read filter");
}

function fltrBest() {
	fltrCat("best");
	newHistMesAdd("You used Best filter");
}

function fltrClassic() {
	fltrCat("classic");
	newHistMesAdd("You used Classic filter");
}

function fltrNonFiction() {
	fltrCat("non_fiction");
	newHistMesAdd("You used Non Fiction filter");
}

function fltrHistory () {
	hideAll();
	histArr.forEach(
		function(item){
			var newHistDiv = document.createElement("div");
			newHistDiv.innerHTML = "<li style='list-style: none; background: url(History.svg) 0 2px no-repeat; padding-left: 25px;'>" + 
			"<p class='hist_mess' style='text-align: justify; height:25px; word-wrap: break-word;'>" + item
			"</p>";
			newHistDiv.className = "m_content";
			var m_c = document.getElementById('main_content');
			m_c.insertBefore(newHistDiv, m_c.firstChild);
			m_c.style.flexDirection = 'column';
			m_c.style.flexWrap = 'nowrap';
		});
}

var last;
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
}

function fltrFavor () {
	view();
	for (var book of myLib) {
		if ( localStorage.getItem(+book.id) ) {
				if (localStorage.getItem(+book.id) > 2 ) {
					document.getElementById(book.id).style.display = 'flex';
				}
		}
	}
}

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
	/* for (var k = 1; k < items.length; k++) {
		for (var c =0; c < itemsArr.length; c++) {
			if (list.childNodes[k].id == itemsArr[c].id) {
				list.childNodes[k].style.order = +c;
			}
		}
	} */
	CheckParam(items, itemsArr, setOrder, checkId);
}//fltrRecent

function fltrNowReading() {
	fltrAll();
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
						//a_crt = book.updatedAt;
						a_crt = Math.random();
				}
				if (book.id == b.id){
						//b_crt = book.updatedAt;
						b_crt = Math.random();
				}
			};
		var result = a_crt - b_crt;
		return result;
	});//sort
	//console.log(itemsArr);
	
	/* for (var k = 1; k < items.length; k++) {
		for (var c = 0; c < itemsArr.length; c++) {
			if (list.childNodes[k].id == itemsArr[c].id) {
				list.childNodes[k].style.order = +c;
			}
		}
	} */
	CheckParam(items, itemsArr, setOrder, checkId);
}//fltrNowReading

function checkId (col_item, arr_item) {
		return col_item.id == arr_item.id;
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