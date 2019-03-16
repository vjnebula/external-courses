function CheckObj (obj) {
return ( obj instanceof Object ) }

function CopyProp (obj, newobj) { 

		
		for ( var prop in obj ) {
			
			if ( !CheckObj( obj[prop] ) ){
		
				newobj[prop] = obj[prop]; }
			else { 
			newobj[prop] = CopyObj( obj[prop] );}
			
		}//for 
		return newobj;
		
}//func CopyProp

function CopyObj (obj){
	if ( CheckObj(obj) ) {
		var newobj = {};
		return CopyProp(obj, newobj );
		}//if CheckObj
	else console.log("not and object");
}//func CopyObj

var object1 = { prpO1: "string1", prp2O1: 1111 };
var object2 = { prpO2: "string2", prp2O2: object1 };
var object3 = { prpO3: "string2", prp2O3: object2 };


//console.log(CopyObj(object1));
//console.log(CopyObj(object2));
console.log(CopyObj(object3));
//console.log(CopyObj({}));
//console.log(CopyObj("must be object"));
 
end = "end of script";