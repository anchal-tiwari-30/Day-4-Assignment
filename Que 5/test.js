function findLargestInteger() {
    var num1Input = document.getElementById('num1Input');
    var num2Input = document.getElementById('num2Input');
    var num3Input = document.getElementById('num3Input');
    var resultElement = document.getElementById('result');
  
    var num1 = parseInt(num1Input.value);
    var num2 = parseInt(num2Input.value);
    var num3 = parseInt(num3Input.value);
  
    var largest = num1;
  
    if (num2 > largest) {
      largest = num2;
    }
  
    if (num3 > largest) {
      largest = num3;
    }
  
    resultElement.textContent = "The largest number is: " + largest;
  }
  