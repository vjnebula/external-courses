var ArrMap = function ( arr, callback ) {
	var newArr = [];
	for (var i = 0 ; i < arr.length; i++) {
		newArr.push( callback( arr[i], i, arr ) );
		
	}//for i
	return newArr;
}//func ArrSome



var arr = [1,2,4,1,5];
console.log(ArrMap( arr, function(item, i , arr){
	return item + 1;
}) );

end = "end of script"