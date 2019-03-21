function ToUpCase(str) {
	if ( typeof str == "string" ) {
		
		for (i = 0; i < str.length; i++){
		
		if ( str[i] != " " && "1234567890".indexOf(str[i]) < 0 ){
			
			str = str.slice( 0, i ) + str[i].toUpperCase() + str.slice( i + 1, str.length ) ;
			
			return str;
		}
		
		}//for i
		return str;
	}//if typeof
	else console.log ("not a string");
}// func RemoveSpaces

console.log(ToUpCase("1  2sdf"));


end = "end of script";