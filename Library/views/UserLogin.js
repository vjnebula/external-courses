function drop() {
	var dropElements = document.getElementsByClassName('dropdown-content');
	for (var elem of dropElements) {
		elem.style.display = 'block';
	}//for e
	var myButton = document.querySelector('.signIn');
	myButton.onclick = userSignIn;
	myDiv.onclick = dropClose;
	myDiv.style.backgroundColor = '#15a4fa';
}//drop

function dropClose() {
	var dropElements = document.getElementsByClassName('dropdown-content');
	myDiv.onclick = drop;
	for (var elem of dropElements) {
		elem.style.display = 'none';
	}//for e
	myDiv.style.backgroundColor = '#2f364a';
}//dropClose

function userSignIn() {
	var dropElements = document.getElementsByClassName('dropdown-content');
	//myDiv.onclick = drop;
	for (var elem of dropElements) {
		elem.style.display = 'none';
	}//for e
	myDiv.onclick = "";
	myDiv.style.display = 'none';
	document.getElementsByClassName('user_logged')[0].style.display = 'flex';
}//userSignIn