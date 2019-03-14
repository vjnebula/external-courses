function Max (arr) {
	var Max = arr[0];
		for (var i = 1; i < arr.length; i++) {
			if ( arr[i] > Max ) {
			Max = arr[i];}
		}//for i
	
	return Max;
}//Same()
console.log(Max([1,4,6,3,2,8,7,0]));
console.log(Max("Ann, Bill, Alice, Marry, Klod, Pol, Jack".split(", ")));
