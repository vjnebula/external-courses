document.querySelector('.file-input').onchange = getFiles;

document.querySelector('.f_recent').onclick = fltrRecent;
document.querySelector('.f_favourite').onclick = fltrFavourite;
document.querySelector('.f_nowReading').onclick = fltrNowReading;
document.querySelector('.f_free').onclick = fltrFree;
document.querySelector('.f_best').onclick = fltrBest;
document.querySelector('.f_all').onclick = fltrAll;
document.querySelector('.m_browse').onclick = fltrAll;
document.querySelector('.f_non_fiction').onclick = fltrNonFiction;
document.querySelector('.f_classic').onclick = fltrClassic;
document.querySelector('.f_must').onclick = fltrMustReadTitles;
document.querySelector('.f_popular').onclick = fltrPopular;
document.querySelector('.m_history').onclick = fltrHistory;
document.querySelector('.help').onclick = showHelp;

var myDiv = document.querySelector('.user');
myDiv.onclick = drop;

function fltrMustReadTitles() {
	fltrCat("must_read");
	filterHighlight(this, "#15a4fa");
	newHistoryMessageAdd("You used Must Read filter");
}

function fltrBest() {
	fltrCat("best");
	filterHighlight(this, "#15a4fa");
	newHistoryMessageAdd("You used Best filter");
}

function fltrClassic() {
	fltrCat("classic");
	filterHighlight(this, "#15a4fa");
	newHistoryMessageAdd("You used Classic filter");
}

function fltrNonFiction() {
	fltrCat("non_fiction");
	filterHighlight(this, "#15a4fa");
	newHistoryMessageAdd("You used Non Fiction filter");
}

function fltrNowReading() {
	//fltrRecent.bind(this);
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

