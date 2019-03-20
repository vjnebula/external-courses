function PutWordToStr (str, word, num) {
	if ( typeof num == "number" ) {
	if ( typeof str == "string" ) {
		var strArr = str.split(" ");
		var newArr = [];
		if ( num < 1 ) { strArr.unshift( word );
				}
		if (strArr.length > num) {
			
		for (var i = 0; i < strArr.length + 1; i++) {
			newArr.push( strArr[i] );
			if ( i == num) { newArr.push( word );
				}
			
		}//for i
		return newArr.join(" ");
		}//if strArr.length
		else return ( strArr.join(" ") + " " + word )
		
	}//if typeof str
	else console.log ("not a string");
	}//if typeof num
	else console.log ("not a number");
}// func PutWordToStr
var str1 = PutWordToStr("i am cool", "very", 1);
console.log(str1);
var str2 = PutWordToStr("i am cool", "!!!", 5);
console.log(str2);
var str3 = PutWordToStr("second fird", "first", -1);
console.log(str3);

end = "end of script";