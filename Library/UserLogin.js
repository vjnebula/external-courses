function drp() {
	var dropElements = document.getElementsByClassName('dropdown-content');
	for (var e of dropElements) {
		e.style.display = 'block';
	}//for e
	
	myDiv.onclick = drpClose;
}//drp

function drpClose() {
	var dropElements = document.getElementsByClassName('dropdown-content');
	myDiv.onclick = drp;
	for (var e of dropElements) {
		e.style.display = 'none';
	}//for e
}//dropClose


var myDiv = document.getElementById('user');
myDiv.onclick = drp;