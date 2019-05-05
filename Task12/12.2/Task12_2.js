function drp () {
	//console.log( this == );
	alert(this == myDiv);
	var dropElements = document.getElementsByClassName('dropdown-content');
	var disp = 'block';
	if (this == myDiv) {
	for (var e of dropElements) {
			e.style.display = disp;
	}//for e
	}
}//drop

function drpClose () {
	var myDiv = document.getElementById('user');
	alert(this == myDiv);
}//drop

var myDiv = document.getElementById('user');
myDiv.addEventListener("click", drp);
document.addEventListener("click", drp);