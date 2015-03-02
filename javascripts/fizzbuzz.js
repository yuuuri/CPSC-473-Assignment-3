// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */

var main = function() {
    "use strict";

    var i, str_array[];

	
	function fizzbuzz_1(){
        for (i = 1; i <= 100; i++) {
			
              // write FizzBuzz if divisible by 3 and 5  
              if ((i%3 === 0) && (i%5 === 0)) {
                    str_array.push("FizzBuzz");
              // write Fizz if divisible by 3
              } else if (i%3 === 0) {
                    str_array.push("Fizz");
              // write Buzz if divisble by 5
              } else if (i%5 === 0) {
                    str_array.push("Buzz");
              // otherwise write i
              } else {
                    str_array.push(i);
              }

        } // end of for loop

    //display output on webpage
    str_array.forEach(function(element){
        $("body .fizzbuzz_1").append($("<p>").text(element));
    });

  }// end of fizzbuzz_1
   
    //calling function to display number, Fizz, Buzz, or FizzBuzz
   fizzbuzz_1();


};
$(document).ready(main);

