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
	fltrAll();
	for (var b of myLib) {
		for (var cat of b.categories){
			if (cat != cat_name) {
				document.getElementById(b.id).style.display = 'none';
			}
		}
	}
}

function fltrAll() {
	for (var b of myLib) {
				document.getElementById(b.id).style.display = 'flex';
	}
}

function fltrPopular() {
	fltrAll();
	for (var b of myLib) {
		if (b.rating < 5){
				document.getElementById(b.id).style.display = 'none';
		}
	}
}

function fltrFree() {
	fltrAll();
	for (var b of myLib) {
		if (b.cost > 50){
				document.getElementById(b.id).style.display = 'none';
		}
	}
}

function fltrMust() {
	fltrCat("must_read");
}

function fltrBest() {
	fltrCat("best");
}

function fltrClassic() {
	fltrCat("classic");
}

function fltrNonFiction() {
	fltrCat("non_fiction");
}