// algo.js

function check_division_by_3_and_5() {
    event.preventDefault(); // Prevents the form from submitting
    var n = document.getElementById("number").value; // Get the value from the input field
    n = parseInt(n); // Convert the value to an integer
    
    if (isNaN(n)) {
        alert("Please enter a valid number");
    } else {
        let result = []
        for (let x = 1; x <= n; x++) {
            if (x % 15 == 0) {
                result.push("FizzBuzz");
            } else if (x % 3 == 0) {
                result.push("Fizz");
            } else if (x % 5 == 0) {
                result.push("Buzz");
            } else {
                result.push(x);
            }
        }
        let paragraph = document.getElementById("result");
        let resultString = result.join(", ");
        paragraph.innerText = resultString;
    }
}