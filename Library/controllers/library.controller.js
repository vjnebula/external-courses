document.getElementById('file-input').onchange = getFiles;

document.getElementById('f_recent').onclick = fltrRecent;
document.getElementById('f_favourite').onclick = fltrFavor;
document.getElementById('f_nowReading').onclick = fltrNowReading;
document.getElementById('f_free').onclick = fltrFree;
document.getElementById('f_best').onclick = fltrBest;
document.getElementById('f_all').onclick = fltrAll;
document.getElementById('m_browse').onclick = fltrAll;
document.getElementById('f_non_fiction').onclick = fltrNonFiction;
document.getElementById('f_classic').onclick = fltrClassic;
document.getElementById('f_must').onclick = fltrMustReadTitles;
document.getElementById('f_popular').onclick = fltrPopular;
document.getElementById('m_history').onclick = fltrHistory;
document.getElementById('help').onclick = showHelp;

var myDiv = document.getElementById('user');
myDiv.onclick = drop;

function fltrMustReadTitles() {
	fltrCat("must_read");
	newHistoryMessageAdd("You used Must Read filter");
}

function fltrBest() {
	fltrCat("best");
	newHistoryMessageAdd("You used Best filter");
}

function fltrClassic() {
	fltrCat("classic");
	newHistoryMessageAdd("You used Classic filter");
}

function fltrNonFiction() {
	fltrCat("non_fiction");
	newHistoryMessageAdd("You used Non Fiction filter");
}

function fltrNowReading() {
	fltrRecent();
}


function setRate() {
		var parentElement = this.parentElement;
		if (this.onmouseleave == clear) {
			for (var i = 0; i < parentElement.children.length; i++) {
				if (parentElement.children[i] == this ){
					setRating((i+1)/2, parentElement);
					return;
				}//if
			}//for i
		}//if target clear
		if (this.onmouseleave == null) {
			setRating(0, parentElement);
		}//if target null
};//setRate

