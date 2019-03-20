function DotStrLeng (str, num) {
	if ( typeof num == "number" ) {
	if ( typeof str == "string" ) {
		
		if (str.length > num){
			var dotStr = "";
			for (  i = 0 ; i < (str.length - num); i++ )
			{ dotStr += "."}
			str = str.slice(0, num) + dotStr;
		}
		
		return str;
	}//if typeof str
	else console.log ("not a string");
	}//if typeof num
	else console.log ("not a number");
}// func DotStrLeng
var str1 = DotStrLeng("1234567890", 7);
console.log(str1);

end = "end of script";