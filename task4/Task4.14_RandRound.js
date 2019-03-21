function Rand (min, max) {
		max = max + 1;
		var num = (Math.random() * (max - min) + min).toString().split(".");
		return +num[0];
} //func Rand

console.log(Rand (99, 100));
console.log(typeof Rand (0, 100));
console.log(Rand (0, 100));
end = "end of script";