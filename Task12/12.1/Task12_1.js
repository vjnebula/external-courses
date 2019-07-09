function prepend (contain, elem) {
	//alert("function started");
	var contain = this.parentNode;
	
	var theFirstChild = contain.firstChild;

	var elem = document.createElement('input');
	contain.insertBefore(elem, theFirstChild);
}

//alert("script started");

var myDiv = document.createElement('div');
document.body.appendChild(myDiv);
myDiv.style.width = "30%";
myDiv.style.height = "50px"; 
myDiv.style.display = 'flex';
myDiv.style.flexDirection = 'column';
var newButton = document.createElement('BUTTON');
var buttonText = document.createTextNode("Prepend");
newButton.appendChild(buttonText);
myDiv.appendChild(newButton);
newButton.addEventListener("click", prepend);