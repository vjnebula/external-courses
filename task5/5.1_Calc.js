function makeCalc(){
	var currentState = 0;
	
	function calc(){
		return currentState;
	}
	calc.result = function() {
		return currentState;
	}
	
	calc.reset = function() {
		currentState = 0;
	}
	
	calc.set = function(state) {
		currentState = state;
	}
	
	calc.sum = function Fsum (arg1) {
		  if (arg1 != undefined) {
			currentState = currentState + arg1;
			
			return function (arg2) { return Fsum(arg2) }
				
		  } else { return function (arg2) { return Fsum(arg2); } }
		
	}
	
	calc.div = function Fdiv (arg1) {
		  if (arg1 != undefined) {
			currentState = currentState / arg1;
			
			return function (arg2) { return Fdiv(arg2) }
				
		  } else { return function (arg2) { return Fdiv(arg2); } }
		
	}
	
	calc.sub = function Fsub (arg1) {
		  if (arg1 != undefined) {
			currentState = currentState - arg1;
			
			return function (arg2) { return Fsub(arg2) }
				
		  } else { return function (arg2) { return Fsub(arg2); } }
		
	}
	
	calc.mult = function Fmult (arg1) {
		  if (arg1 != undefined) {
			currentState = currentState * arg1;
			
			return function (arg2) { return Fmult(arg2) }
				
		  } else { return function (arg2) { return Fmult(arg2); } }
		
	}
	return calc;
	
	
}
var calculator = makeCalc();
//console.log({}.toString.call(calculator.sum) === '[object Function]');
calculator.set(1)
console.log(calculator());
calculator.reset();
console.log(calculator());
calculator.sum()()(2)(3)()()(5)()();
console.log(calculator());
calculator.sub()(4)()(2);
console.log(calculator());
calculator.mult(3);
console.log(calculator());
calculator.div()()(2);
console.log(calculator());
