function SumTwo (num1, num2) {
	var sum = num1 + num2;
	var str = sum.toString();
	if ( str.indexOf(".") > 0 ){
		cut = "";
		strArr = str.split(".");
		if (strArr[1].length > 2 ) {
			var strArrCut = strArr[1].slice(2).split("");
			cut = strArrCut.reduceRight( function ( prev, cur ) {
				if ( +prev > 4 ) {
					return +cur + 1; }
				else return cur;
				});
		}
	str =  strArr[0] + "." + strArr[1].slice(0,2) + cut;
	}
	return (str);
} //func SumTwo

console.log(SumTwo(2.123453, 4.123006));
console.log(SumTwo(2.123, 4.123));
console.log(SumTwo(2.12, 4.12));
console.log(SumTwo(2, 4));