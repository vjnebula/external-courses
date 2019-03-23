function ArrSlice (arr, beg, end) {
	if ( arr !== undefined ) {
		var arrCut = [];
				
		if ( typeof beg == "undefined" ) { var beg = 0; }
			else if ( beg == null ) { return console.log("begin is not a number"); }
				else {	beg = +beg;
						if ( typeof beg !== "number" || isNaN(beg) ) {
							return console.log("begin is not a number"); }
					}
		if ( typeof end == "undefined" ) { var end;
				beg >= 0 ? end = arr.length : end = -arr.length }
			else if ( end == null ) { return console.log("end is not a number"); }
				else {	end = +end;
					if ( typeof end !== "number" || isNaN(end) ) {
						return console.log("end is not a number"); }
					}
		//if ( end > 0 && beg < 0 ) {return [];}
		//if ( end < 0 && beg > 0 ) {return [];}
		if ( end < 0 && beg <= 0 ) { 
			//arr = arr.reverse();
			end = -end;
			beg = -beg;
		}
		if ( end > 0 && beg >=0 ) {
			if ( end > arr.length ) { end = arr.length; }
			if ( end < beg ) {return [];}
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
console.log("end < beg  " + ArrSlice(testArr,3,1));
console.log("end and beg < 0   " + ArrSlice(testArr,-2,-5));
console.log("-beg > -end " + ArrSlice(testArr,-6,-5));
console.log("-beg end = undef " + ArrSlice(testArr,-6));
console.log(ArrSlice(testArr,NaN));
console.log(ArrSlice(testArr,1,NaN));
console.log(ArrSlice(testArr,null));
console.log(ArrSlice(testArr,1,null));

fin = "end of script";

