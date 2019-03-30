var ArrEvery = function ( arr, callback ) {
	for (var i = 0 ; i < arr.length; i++) {
		if ( callback( arr[i], i, arr ) != true ) { return false; }
	}//for i
	return true;
}//func ArrSome


var arr = [1,2,true,"ss",4,5];

console.log(ArrEvery( arr, function(item, i, arr){
	return item > 3;
}) );

var arr = [3,2,4,5];
console.log(ArrEvery( arr, function(item, i , arr){
	return item > 1;
}) );

end = "end of script"