function RemoveSpaces (str) {
	
	if ( typeof str == "string" ) {
		
		if (str[0] == " "){
			str = str.slice(1, str.length);
		}
		if (str[str.length-1] == " "){
			str = str.slice(0, str.length-1);
		}
		return str;
	}//if typeof
	else console.log ("not a string");
}// func RemoveSpaces
var str1 = RemoveSpaces(" word1 word2 ");
console.log(str1);
var str2 = RemoveSpaces(" ");
console.log(str2);
var str3 = RemoveSpaces("");
console.log(str3);
var str4 = RemoveSpaces(111);
console.log(str4);

end = "end of script";