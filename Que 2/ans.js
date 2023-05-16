function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
  
    var multiplication = num1 * num2;
    var division = num1 / num2;
  
    document.getElementById("resultMultiplication").innerHTML =
      "Multiplication: " + multiplication;
    document.getElementById("resultDivision").innerHTML =
      "Division: " + division;
  }
  
  document.getElementById("calculateBtn").addEventListener("click", calculate);
  