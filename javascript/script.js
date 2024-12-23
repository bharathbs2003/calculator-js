function cal() {
    var num1 = parseFloat(document.getElementById('number1').value);
    var num2 = parseFloat(document.getElementById('number2').value);
    var operation = document.getElementById('operation').value;

    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("ans").innerHTML = "Please enter valid numbers.";
        return;
    }

    // Perform the selected operation
    switch (operation) {
        case "add":
            add(num1, num2);
            break;
        case "subtract":
            subtract(num1, num2);
            break;
        case "multiply":
            multiply(num1, num2);
            break;
        case "divide":
            divide(num1, num2);
            break;
        default:
            document.getElementById("ans").innerHTML = "Please select a valid operation.";
    }
}

function add(num1, num2) {
    var result = num1 + num2;  
    document.getElementById("ans").innerHTML = `The answer is: ${result}`;
}

function subtract(num1, num2) {
    var result = num1 - num2;
    document.getElementById("ans").innerHTML = `The answer is: ${result}`;
}

function multiply(num1, num2) {
    var result = num1 * num2;
    document.getElementById("ans").innerHTML = `The answer is: ${result}`;
}

function divide(num1, num2) {
    if (num2 === 0) {
        document.getElementById("ans").innerHTML = "Cannot divide by zero.";
    } else {
        var result = num1 / num2;
        document.getElementById("ans").innerHTML = `The answer is: ${result}`;
    }
}









