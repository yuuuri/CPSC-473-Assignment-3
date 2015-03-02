// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */

var main = function() {
    "use strict";

    var i;

    function fizzbuzz_1() {
        $("body .first").append("<p>");
        for (i=1; i<=100; i++) {
            if ( (i%3 === 0 ) && (i%5 === 0) ) {
                $("body .first").append("FizzBuzz ");
            } else if ( i%3 === 0) {
                $("body .first").append("Fizz ");
            } else if ( i%5 === 0 ) {
                $("body .first").append("Buzz ");
            }
            else {
                $("body .first").append( i + " ")
            }
        }
        $("body .first").append("</p><br>");
    }
    $("body .first").append("<p> FizzBuzz1: </p>");
    fizzbuzz_1();
};
$(document).ready(main);

