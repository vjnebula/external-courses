function Same (arr) {
	for (var val of arr) {
		for (var i = arr.indexOf(val) + 1; i < arr.length; i++) {
			if ( val == arr[i] ) {
			return true}
		}//for i
	}//for val
	return false;
}//Same()
console.log(Same("Ann, Bill, Alice, Marry, Klod, Ann, Jack".split(", ")));
console.log(Same("Ann, Bill, Alice, Marry, Klod, Pol, Jack".split(", ")));