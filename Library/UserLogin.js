function drp() {
	var dropElements = document.getElementsByClassName('dropdown-content');
	for (var e of dropElements) {
		e.style.display = 'block';
	}//for e
	var myButton = document.getElementById('signIn');
	myButton.onclick = userSignIn;
	myDiv.onclick = drpClose;
}//drp

function drpClose() {
	var dropElements = document.getElementsByClassName('dropdown-content');
	myDiv.onclick = drp;
	for (var e of dropElements) {
		e.style.display = 'none';
	}//for e
}//dropClose

function userSignIn() {
	var dropElements = document.getElementsByClassName('dropdown-content');
	//myDiv.onclick = drp;
	for (var e of dropElements) {
		e.style.display = 'none';
	}//for e
	myDiv.onclick = "";
	myDiv.style.display = 'none';
	var userMenu = document.getElementById('user_logged');
	userMenu.style.display = 'flex';
}//userSignIn

var myDiv = document.getElementById('user');
myDiv.onclick = drp;