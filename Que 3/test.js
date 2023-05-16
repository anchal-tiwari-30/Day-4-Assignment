function convertTemperature(event) {
    event.preventDefault();

    var celsius = parseFloat(document.getElementById('celsiusInput').value);

    var fahrenheit = (celsius * 9/5) + 32;

    var resultElement = document.getElementById('result');
    resultElement.textContent = celsius + "°C is equal to " + fahrenheit + "°F";
  }
  