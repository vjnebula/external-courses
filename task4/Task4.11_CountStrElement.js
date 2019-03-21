function CountStrElement (str) {
	if ( typeof str == "string" ) {
		var newObj = { " name": "element counter"};
		for ( var i = 0; i < str.length; i++) {
			
			if ( newObj[str[i]] !== undefined )  {
				newObj[str[i]] = newObj[str[i]] + 1;
				continue;
			}
			else { newObj[str[i]] = 1; }
		
			
			
		}//for i
		
		return newObj;
	}//if typeof
	else { console.log ("not a string"); }
}// func CountStrElement

var obj = CountStrElement("element counter");
console.log(obj);

end = "end of script";