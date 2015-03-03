// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */

var main = function() {
    "use strict";

    var i;

	  //writes number 1-100 except when divisible by 3, 5, and 3 & 5
    function fizzbuzz_1(){

        $("body .fizzbuzz_1").append("<p>");

        for (i = 1; i <= 100; i++) {
              // write FizzBuzz if divisible by 3 and 5  
              if ((i%3 === 0) && (i%5 === 0)) {
                    $("body .fizzbuzz_1").append("FizzBuzz ");
              // write Fizz if divisible by 3
              } else if (i%3 === 0) {
                    $("body .fizzbuzz_1").append("Fizz ");
              // write Buzz if divisble by 5
              } else if (i%5 === 0) {
                    $("body .fizzbuzz_1").append("Buzz ");
              // otherwise write i
              } else {
                    $("body .fizzbuzz_1").append(" " + i + " ");
              }

        } // end of for loop

        $("body .fizzbuzz_1").append("</p><br>");

    }// end of fizzbuzz_1

    
    //same function above except use parameter start and end
    function fizzbuzz_2(start, end) {

        $("body .fizzbuzz_2").append("<p>");

        for (i = start; i <= end; i++) {
                      // write FizzBuzz if divisible by 3 and 5  
              if ((i%3 === 0) && (i%5 === 0)) {
                    $("body .fizzbuzz_2").append("FizzBuzz ");
              // write Fizz if divisible by 3
              } else if (i%3 === 0) {
                    $("body .fizzbuzz_2").append("Fizz ");
              // write Buzz if divisble by 5
              } else if (i%5 === 0) {
                    $("body .fizzbuzz_2").append("Buzz ");
              // otherwise write i
              } else {
                    $("body .fizzbuzz_2").append(" " + i + " ");
              }

        } // end of for loop

        $("body .fizzbuzz_2").append("</p><br>");

    }// end of fizzbuzz_2
    
                    



   
    // calling function to display number, Fizz, Buzz, or FizzBuzz
    fizzbuzz_1();
    // calling same function above except using parameter
    fizzbuzz_2(200, 300);


};
$(document).ready(main);

