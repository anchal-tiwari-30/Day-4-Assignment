function convertTemperature(event) {
    event.preventDefault();

    var temp = parseFloat(document.getElementById('tempInput').value);
    var unit = (document.getElementById('unitInput').value);
    
    if (unit == "C") {
      var convertTemp = (temp * 9/5) + 32; 
      var resultElement = document.getElementById('result');
      resultElement.textContent = temp + "°C is " + convertTemp + "°F";  
    }
    else if(unit == "F"){
      var convertTemp = 5/9 * (temp - 32);
      var resultElement = document.getElementById('result');
      resultElement.textContent = temp + "°F is " + convertTemp + "°C";
    }
  }
  
