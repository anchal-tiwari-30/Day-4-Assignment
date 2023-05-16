function calculateDifference() {
    var numberInput = document.getElementById('numberInput');
    var number = parseInt(numberInput.value);
    var resultElement = document.getElementById('result');
  
    var difference = Math.abs(number - 13);
  
    if (number > 13) {
      resultElement.textContent = "The difference is: " + (difference * 2);
    } else {
      resultElement.textContent = "The difference is: " + difference;
    }
  }
  