function lowerCamelCase(str) {
	if ( typeof str == "string" ) {
		var strArr = str.split(" ");
		console.log(strArr);
		var flg = 0;
		for (var v = 0; v < strArr.length; v++) {
			var val = strArr[v];
			if (val.length > 0 ) {
				console.log(flg);
			for (var i = 0; i < val.length; i++){
				
				if ( ("1234567890".indexOf(val[i]) < 0) ){
						if (flg == 0 ) { flg = 1; }
						else {
						val = val.slice( 0, i ) + val[i].toUpperCase() + val.slice( i + 1, val.length ) ;
						strArr[v] = val; }
					break;
			
				}
				
			}//for i 
			}//if val.length 
		
		}//for val
		return strArr.join("");
	}//if typeof
	else console.log ("not a string");
}// func RemoveSpaces

console.log(lowerCamelCase("1  2sdf akp 45ggh zf8j"));


end = "end of script";