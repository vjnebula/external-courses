function makeCalc(){
	var currentState = 0;
	
	function calc(){
		return currentState;
	}
	calc.getResult = function() {
		return currentState;
	}
	
	calc.reset = function() {
		currentState = 0;
	}
	
	calc.set = function(state) {
		currentState = state;
	}
	
	calc.add = function Fadd (arg) {
		  if (arg != undefined) {
			currentState = currentState + arg;
		  }
		
		return Fadd;
	}
	
	calc.divide = function Fdivide (arg) {
		  if (arg != undefined) {
			currentState = currentState / arg;
		  } 
		 return Fdivide;
	}
	
	calc.subtract = function Fsubtract (arg) {
		  if (arg != undefined) {
		  currentState = currentState - arg;
		   }
		return Fsubtract;
	}
	
	calc.multiply = function Fmultiply (arg) {
		  if (arg != undefined) {
			currentState = currentState * arg;
		  } 
		 return Fmultiply;
	}
	
	return calc;
	
	
}
var calculator = makeCalc();
//console.log({}.toString.call(calculator.sum) === '[object Function]');
calculator.set(1)
console.log(calculator());
calculator.reset();
console.log(calculator());
calculator.add()()(2)(3)()()(5)()();
console.log(calculator());
calculator.subtract()(4)()(2);
console.log(calculator());
calculator.multiply(3);
console.log(calculator());
calculator.divide()()(2);
console.log(calculator());
