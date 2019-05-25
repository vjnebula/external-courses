function drp() {
	//alert(event.target == myDiv);
	var dropElements = document.getElementsByClassName('dropdown-content');
	for (var e of dropElements) {
		e.style.display = 'block';
	}//for e
	
	myDiv.removeEventListener("click", drp);
	document.addEventListener("click", drpClose);
}//drp

function drpClose() {
	//alert(event.target.tagName == 'HTML');
	var dropElements = document.getElementsByClassName('dropdown-content');
	if (event.target.tagName == 'HTML') {
	document.removeEventListener("click", drpClose);
	myDiv.addEventListener("click", drp);
	for (var e of dropElements) {
		e.style.display = 'none';
	}//for e
	}//if event
}//dropClose


var myDiv = document.getElementById('user');
myDiv.addEventListener("click", drp);