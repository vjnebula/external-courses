var ArrReduce = function ( arr, callback , initialValue) {
	var newArr = [];
	var i = 0;
	if ( initialValue != undefined ) { previousValue = initialValue; }
		else { previousValue = arr[0];
				i = 1; }
	for (i; i < arr.length; i++) {
		//console.log(arr[i]);
		previousValue = callback( previousValue,  arr[i], i, arr );
		
	}//for i
	return previousValue;
}//func ArrSome



var arr = [2,2,4,1,5];
console.log(ArrReduce( arr, function( previousValue,  currentItem, i , arr ){
	return previousValue + currentItem;
}) );

var arr = [2,2,4,1,5];
console.log(ArrReduce( arr, function( previousValue,  currentItem, i , arr ){
	return previousValue + currentItem;
},1) );

end = "end of script"