function CheckObj (obj) {
return ( obj instanceof Object ) }

function CheckPropSetNew (obj, str) { 
	if ( CheckObj(obj) ) {
		if (typeof str == "string") {
		for ( var prop in obj ) {
			
			if ( prop == str ){
				console.log("property already exist");
				return obj; }//unmodified object
			
		}//for 
		//no property was found, setting new property
		obj[str] = "new";
		return obj;
		}//if string
		else console.log("not a string");
		return obj;//unmodified object
		
	}//if CheckObj
	else console.log("not and object");
	//return false; - if not an object undefined is better
}//func CheckPropSetNew
var object1 = { prpO1: "string1", prp2O1: 1111 };
var object2 = { prpO2: "string2", prp2O2: object1 };
var object3 = { prop1: "str prop", prop2: 123, prop3: object1, prop4: object2 };


console.log(CheckPropSetNew(object1, "prpO1"));
console.log(CheckPropSetNew(object2, "prpO1"));
console.log(CheckPropSetNew(object3, "prop3"));//property is object
console.log(CheckPropSetNew(object1, 123));//not a string
console.log(CheckPropSetNew({}, "prpO1"));
console.log(CheckPropSetNew("must be object", "prpO1"));//not an object
 
end = "end of script";