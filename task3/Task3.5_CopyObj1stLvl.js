function CheckObj (obj) {
return ( obj instanceof Object ) }

function CopyObjLink (obj) { 
	if ( CheckObj(obj) ) {
		var newobj = obj;
		//var newobj = Object.assign({},obj);
		return newobj; 
	}//if CheckObj
	else console.log("not and object");
}//func CopyObjLink
var object1 = { prpO1: "string1", prp2O1: 1111 };
var object2 = { prpO2: "string2", prp2O2: object1 };
var object3 = { prpO3: "string2", prp2O3: object2 };
//console.log( CopyObjLink ( "test" ));
//console.log( CopyObjLink (object1) );
console.log(CopyObjLink(object3));
end = "end of script";