function Rand (min, max) {
		var num = (Math.random() * (max - min) + min).toString().split(".");
		return +num[0];
} //func Rand

console.log(Rand (0, 100));
console.log(typeof Rand (0, 100));