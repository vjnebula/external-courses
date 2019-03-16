function CheckObj (obj) {
return ( obj instanceof Object ) }

function LogKeysProp (obj) { 
	if ( CheckObj(obj) ) {
		
		for ( var prop in obj ) {
			
			if ( !CheckObj( obj[prop] ) ){
		
				console.log( prop + " " + obj[prop] ); }
			else LogKeysProp( obj[prop] );
		}//for 
	}//if CheckObj
}//func LogKeysProp
var object1 = { prpO1: "string1", prp2O1: 1111 };
var object2 = { prpO2: "string2", prp2O2: object1 };
LogKeysProp ( "test" );
LogKeysProp ({ prop1: "str prop", prop2: 123, prop3: object1, prop4: object2 });

end = "end of script";