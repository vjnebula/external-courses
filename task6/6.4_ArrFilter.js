var ArrFilter = function ( arr, callback ) {
	var newArr = [];
	for (var i = 0 ; i < arr.length; i++) {
		if ( callback( arr[i], i, arr ) == true ) { 
			newArr.push(arr[i]);
		}//if callback
	}//for i
	return newArr;
}//func ArrSome



var arr = [1,2,4,1,5];
console.log(ArrFilter( arr, function(item, i , arr){
	return item > 1;
}) );

end = "end of script"