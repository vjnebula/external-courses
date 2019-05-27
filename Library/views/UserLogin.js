function drp() {
	var dropElements = document.getElementsByClassName('dropdown-content');
	for (var e of dropElements) {
		e.style.display = 'block';
	}//for e
	var myButton = document.getElementById('signIn');
	myButton.onclick = userSignIn;
	myDiv.onclick = drpClose;
	myDiv.style.backgroundColor = '#15a4fa';
}//drp

function drpClose() {
	var dropElements = document.getElementsByClassName('dropdown-content');
	myDiv.onclick = drp;
	for (var e of dropElements) {
		e.style.display = 'none';
	}//for e
	myDiv.style.backgroundColor = '#2f364a';
}//dropClose

function userSignIn() {
	var dropElements = document.getElementsByClassName('dropdown-content');
	//myDiv.onclick = drp;
	for (var e of dropElements) {
		e.style.display = 'none';
	}//for e
	myDiv.onclick = "";
	myDiv.style.display = 'none';
	document.getElementById('user_logged').style.display = 'flex';
}//userSignIn