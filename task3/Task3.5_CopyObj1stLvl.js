function CheckObj (obj) {
return ( obj instanceof Object ) }

function CopyObjLink (obj) { 
	if ( CheckObj(obj) ) {
		
		var newobj = Object.assign({},obj);
		return newobj; 
	}//if CheckObj
	else console.log("not and object");
}//func CopyObjLink

function CopyObjLink2 (obj) { 
	if ( CheckObj(obj) ) {
		var newobj = obj;
		
		return newobj; 
	}//if CheckObj
	else console.log("not and object");
}//func CopyObjLink

var object1 = { prpO1: "string1", prp2O1: 1111 };
var object2 = { prpO2: "string2", prp2O2: object1 };
var object3 = { prpO3: "string2", prp2O3: object2 };

console.log( CopyObjLink ( "must be object" ));

var TestObj = CopyObjLink(object3);//newobj = Object.assign({},obj)

console.log( TestObj );
console.log( TestObj === object3 );
console.log( TestObj.prp2O3 === object3.prp2O3);
console.log( TestObj.prp2O3.prp2O2 === object3.prp2O3.prp2O2);

var TestObj = CopyObjLink2(object3);//newobj = obj

console.log( TestObj );
console.log( TestObj === object3 );
console.log( TestObj.prp2O3 === object3.prp2O3);
console.log( TestObj.prp2O3.prp2O2 === object3.prp2O3.prp2O2);
end = "end of script";

