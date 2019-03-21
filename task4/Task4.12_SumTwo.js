function SumTwo (num1, num2) {
	var sum = num1 + num2;
	sum = sum.toFixed(3);
	
	return (sum);
} //func SumTwo

console.log(SumTwo(2.123453, 4.123006));
console.log(SumTwo(2.123, 4.123));
console.log(SumTwo(2.12, 4.12));
console.log(SumTwo(2, 4));

end = "end of script";