/*
function Rand (min, max) {
		max = max + 1;
		var num = (Math.random() * (max - min) + min).toString().split(".");
		return +num[0];
} //func Rand 
*/

function Rand2 (min, max) {
		max = max +1;
		result = Math.random() * (max - min) + min;
		return Math.floor(result);
} //func Rand

console.log(Rand2 (99, 100));
//console.log(typeof Rand (0, 100));
console.log(Rand2 (0, 100));
end = "end of script";