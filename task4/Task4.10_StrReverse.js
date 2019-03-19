function StrReverse (str) {
	if ( typeof str == "string" ) {
		var strRvs = "";
		var s = (str.length-1); 
			while ( s >= 0 ){
			strRvs += str[s];
			s--;
			}//while s
		return strRvs;
	}//if typeof
	else console.log ("not a string");
}// func StrReverse

var str2 = StrReverse("not a string")
console.log(str2);

end = "end of script";