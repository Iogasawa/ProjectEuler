var sum = 0; //create object for the numbers to be summed

for(var i = 0; i < 1000; i++) {
	if(i % 3 === 0 || i % 5 === 0) {
  	sum += i; //as the for loop finds the number, it adds and sums the existing list of numbers
  }
};

console.log(sum);