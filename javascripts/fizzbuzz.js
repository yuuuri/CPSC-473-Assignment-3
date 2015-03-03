// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */

var main = function() {
    "use strict";

    var i;

	  //writes number 1-100 except when divisible by 3, 5, and 3 & 5
    function fizzbuzz_1(){
        $("body .fizzbuzz_1").append("<p>FizzBuzz_1</p>");
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
        $("body .fizzbuzz_2").append("<p>FizzBuzz_2</p>");
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
    
    
    //same function above except use parameter start and end
    function fizzbuzz_3(arr) {
            $("body .fizzbuzz_3").append("<p>FizzBuzz_3</p>");
            $("body .fizzbuzz_3").append("<p>");

            if (arr.length > 0) {
                for (i = 0; i < arr.length; i++) {
                      // write FizzBuzz if divisible by 3 and 5  
                      if ( ( (arr[i]) %3 === 0) && ( (arr[i]) %5 === 0 ) ) {
                            $("body .fizzbuzz_3").append("FizzBuzz ");
                      // write Fizz if divisible by 3
                      } else if ( (arr[i]) %3 === 0 ) {
                            $("body .fizzbuzz_3").append("Fizz ");
                      // write Buzz if divisble by 5
                      } else if ( (arr[i]) %5 === 0 ) {
                            $("body .fizzbuzz_3").append("Buzz ");
                      // otherwise write i
                      } else {
                            $("body .fizzbuzz_3").append(" " + arr[i] + " ");
                      }

                } // end of for loop
            } else {
                alert("No element in array");
                console.log("Error: No elements in array");
            }

        $("body .fizzbuzz_3").append("</p><br>");

    }// end of fizzbuzz_3                



   
    // calling function to display number, Fizz, Buzz, or FizzBuzz
    fizzbuzz_1();
    // calling same function above except using parameter
    fizzbuzz_2(200, 300);
    // calling same function with parameter of array
    fizzbuzz_3([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115]);
};
$(document).ready(main);

