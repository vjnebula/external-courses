function Rand (min, max) {
		max = max +1;
		return Math.random() * (max - min) + min;
} //func Rand

console.log( Rand(0, 100) );

end = "end of script";