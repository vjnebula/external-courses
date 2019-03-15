function CheckNum (num) {
	if ( num == 2) { 
		alert("простое");
	return;}
	if ( num <= 1000 ) {
		(num % 2 != 0) ? alert("простое") : alert("составное");
	}
	else (alert( "wrong number" ));
}//CheckNum()

CheckNum(prompt("Enter number",""))

end = "end of script";