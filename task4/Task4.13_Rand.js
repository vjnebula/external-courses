function Rand (min, max) {
		max = max +1;
		var result = 101;
		while (result > 100) {
		result = Math.random() * (max - min) + min;
		console.log(result);
			if ( result <= 100 ) {
				return result;
			}
		}//while
} //func Rand

console.log( Rand(0, 100) );

end = "end of script";