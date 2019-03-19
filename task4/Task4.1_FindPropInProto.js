function FindPropInProto(name, obj) {
	if (CheckObj(obj)){
		for ( var prop in obj.__proto__ ) {
				if (name == prop){
					console.log(obj.__proto__[prop])
				return true;
				}//if
		}//for 
		return false;
	}
	else console.log("not and object");
}//func FindPropInProto

function CheckObj (obj) {
return ( obj instanceof Object ) }

var object1 = { prpO1: "string1", prp2O1: 1111 };
var object2 = Object.create(object1);
object2.prpO1 = "object2 property";
console.log(object2);

console.log(FindPropInProto("prpO1", object2));

end = "end of script";