function CheckObj (obj) {
return ( obj instanceof Object ) }


function CopyObj (obj){
	if ( CheckObj(obj) ) {
		var newobj = {};
		for ( var prop in obj ) {
			
			if ( !CheckObj( obj[prop] ) ){
		
				newobj[prop] = obj[prop]; }
				
			else { newobj[prop] = CopyObj( obj[prop] ); }	
		}//for
		return newobj;
	}//if CheckObj
	else console.log("not and object");
}//func CopyObj

var object1 = { prpO1: "string1", prp2O1: 1111 };
var object2 = { prpO2: "string2", prp2O2: object1 };
var object3 = { prpO3: "string3", prp2O3: object2 };


var TestObj = CopyObj( object3 );
console.log( TestObj );
console.log( TestObj == object3 );
console.log( TestObj.prp2O3 == object3.prp2O3 );
console.log( TestObj.prp2O3.prp2O2 == object3.prp2O3.prp2O2 );
console.log(CopyObj( {} ) );
console.log(CopyObj( "must be object" ) );
 
end = "end of script";