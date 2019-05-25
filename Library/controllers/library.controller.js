document.getElementById('file-input').onchange = getfiles;

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

var myDiv = document.getElementById('user');
myDiv.onclick = drp;

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

function fltrNowReading() {
	fltrRecent();//with updatedAt field, no mater because of random
}//fltrNowReading


function setRate() {
		var prnt = this.parentElement;
		var prntLngth = prnt.children.length;
		if (this.onmouseleave == clear) {
			for (var i = 0; i < prntLngth; i++) {
				if (prnt.children[i] == this ){
					setRating((i+1)/2, prnt);
					return;
				}//if
			}//for i
		}//if target clear
		if (this.onmouseleave == null) {
			setRating(0, prnt);
		}//if target null
};//setRate

