function calculate(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("operation").value;

    let result;

    if(op === "+"){
        result = n1 + n2;
    }
    else if(op === "-"){
        result = n1 - n2;
    }
    else if(op === "*"){
        result = n1 * n2;
    }
    else if(op === "/"){
        if(n2 === 0){
            alert("Division by zero not allowed!");
            return;
        }
        result = n1 / n2;
    }

    let output = document.getElementById("result");
    output.innerText = "Result: " + result;

    // Bonus: Change background color
    if(result >= 0){
        output.style.backgroundColor = "lightgreen";
    } else{
        output.style.backgroundColor = "lightcoral";
    }
}
