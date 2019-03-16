function CheckObj (obj) {
return ( obj instanceof Object ) }

function CheckPropName (obj, str) { 
	if ( CheckObj(obj) ) {
		if (typeof str == "string") {
		for ( var prop in obj ) {
			
			if ( prop == str ){
		
				return true; }
			
		}//for 
		return false;
		}//if string
		else console.log("not a string");
		//return false; - if not a string undefined is better
	}//if CheckObj
	else console.log("not and object");
	//return false; - if not an object undefined is better
}//func CheckPropName
var object1 = { prpO1: "string1", prp2O1: 1111 };
var object2 = { prpO2: "string2", prp2O2: object1 };

var object3 = { prop1: "str prop", prop2: 123, prop3: object1, prop4: object2 };


console.log(CheckPropName(object1, "prpO1"));
console.log(CheckPropName(object2, "prpO1"));
console.log(CheckPropName(object3, "prop3"));
console.log(CheckPropName(object1, 123));
console.log(CheckPropName({}, "prpO1"));
console.log(CheckPropName("must be object", "prpO1"));
 
end = "end of script";