function Rand (min, max) {
		max = max +1;
		
		result = Math.random() * (max - min) + min;
		
		if ( result > 100 ) { return Math.floor(result) }
		
		return result;
			
		
} //func Rand

console.log( Rand(0, 100) );

end = "end of script";