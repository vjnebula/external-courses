function CountArr (arr) {
	var even = 0;
	var odd = 0;
	var zero = 0;
	for ( var val of arr ) {
		if ( val == 0){
			zero+=1; }
			else { (val % 2 != 0) ? odd+=1 : even+=1;}
			}
			console.log("четных: "+even, "нечетных: "+odd, "нулей: "+zero);
			return [even, odd, zero]
				
		}//CountArr
console.log(CountArr([2,3,4,5,6,0]));

end = "end of script";