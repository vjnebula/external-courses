//var fltr = document.getElementById('f_recent');

//document.getElementById('f_recent').onclick = fltrRecent;
document.getElementById('f_free').onclick = fltrFree;
document.getElementById('f_best').onclick = fltrBest;
document.getElementById('f_all').onclick = fltrAll;
document.getElementById('f_non_fiction').onclick = fltrNonFiction;
document.getElementById('f_classic').onclick = fltrClassic;
document.getElementById('f_must').onclick = fltrMust;
document.getElementById('f_popular').onclick = fltrPopular;

function fltrCat(cat_name) {
	hideAll();
	for (var b of myLib) {
		for (var cat of b.categories){
			if (cat == cat_name) {
				document.getElementById(b.id).style.display = 'flex';
			}
		}
	}
}

function fltrAll() {
	for (var b of myLib) {
				//alert(b.id + " " + b.categories);
				document.getElementById(b.id).style.display = 'flex';
	}
}

function hideAll() {
	for (var b of myLib) {
				document.getElementById(b.id).style.display = 'none';
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

//var message = "Test message";
function newHistMesAdd(message) {
	var newHistDiv = document.createElement("div");
	newHistDiv.innerHTML = "<div><li style='list-style: none; background: url(History.svg) 0 2px no-repeat; padding-left: 25px;'>" + 
	"<p class='hist_mess' style='height:25px;'>" + message
	"</p></div>";
	newHistDiv.className = "history_item";
	var hist_cont = document.getElementById('history_items');
	hist_cont.insertBefore(newHistDiv, hist_cont.firstChild);
}
//You added <a href="">The Trial</a> to your <a href="">Most read titles</a></p><p class="time"> 48 minutes ago