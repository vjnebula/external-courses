function ArrSlice (arr, beg, end) {
	if ( arr !== undefined ) {
		var arrCut = [];
				
		if ( beg == undefined ) { var beg = 0; }
				else {	beg = +beg;
					if ( typeof beg !== "number" ) {
						return console.log("begin is not a number"); }
					}
		if ( end == undefined ) { var end = arr.length; }
				else {	end = +end;
					if ( typeof end !== "number" ) {
						return console.log("end is not a number"); }
					}
		if ( beg < 0) { beg = arr.length + beg 
				if ( beg < 0 ) { beg = 0 ;}
				}
		if ( end < 0) { end = arr.length + end }
		if ( end > 0 && beg >=0 ) {
			if ( end > arr.length ) { end = arr.length; }
			if ( end < beg ) { return []; }
			for ( i = beg; i < end; i++) {
				arrCut [ i - beg ] = arr[i];
			}//for id
		}
		return arrCut;
	}//if arr
	else {console.log("no defined array");}
}//func ArrSlice

var testArr = [0,1,2,3,4,5,6,7,8,9];
console.log("end begin was not set  " + ArrSlice(testArr));
console.log("end begin are strings  " + ArrSlice(testArr,"2","7"));
console.log("end was not set  " + ArrSlice(testArr,5));
console.log(ArrSlice(testArr,NaN));
console.log(ArrSlice(testArr,1,NaN));
console.log(ArrSlice(testArr,null));
console.log(ArrSlice(testArr,1,null));

fin = "end of script";

