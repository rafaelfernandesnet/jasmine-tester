function test(){
	return true
}

function sum(a, b){
	return a+b;
}

function subtract(a, b){
	return a-b;
}

function multiply(a,b){
		return a*b;
}

function sumByFive(num){
	return sum(num,5);
}

function subtractByTwiceItsValue(num){
	return subtract(num, multiply(num,2));
}
