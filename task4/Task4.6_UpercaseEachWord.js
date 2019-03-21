function ToUpCaseEach(str) {
	if ( typeof str == "string" ) {
		
		for (i = 0; i < str.length; i++){
		
		if ( str[i] != " " && "1234567890".indexOf(str[i]) < 0 ){
			if ( i == 0 || str[i-1] == " " || "1234567890".indexOf(str[i-1]) >= 0 ){
			str = str.slice( 0, i ) + str[i].toUpperCase() + str.slice( i + 1, str.length ) ;
			}
			
		}
		
		}//for i
		
		return str;
	}//if typeof
	else console.log ("not a string");
}// func RemoveSpaces

console.log(ToUpCaseEach("1  2sdf asd ggg zff"));
console.log(ToUpCaseEach("asd ggg zff"));


end = "end of script";