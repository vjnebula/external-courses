var ArrSome = function ( arr, callback ) {
	for (var i = 0 ; i < arr.length; i++) {
		if ( callback( arr[i], i, arr ) == true ) { return true; }
	}//for i
	return false;
}//func ArrSome


var arr = [1,2,true,"ss",4,5];
console.log(ArrSome( arr, function(item, i , arr){
	return item > 3;
}) );
var arr = [1,2,true,"ss",4,5];
console.log(ArrSome( arr, function(item, i , arr){
	return item > 6;
}) );
end = "end of script"