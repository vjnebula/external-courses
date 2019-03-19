function FindStr(str, searchStr) {
	if ( typeof str == "string" ) {
			
		return str.indexOf(searchStr) < 0 ? false : true;
				
	}//if typeof
	else console.log ("not a string");
}// func RemoveSpaces

console.log(FindStr("This is test string", "test"));
console.log(FindStr("This is test string", "not"));

end = "end of script";