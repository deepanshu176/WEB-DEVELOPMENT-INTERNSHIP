function convert() {
    var celsius = document.getElementById("celsius").value;
  
    if (celsius === "") {
      alert("Please enter a temperature in Celsius.");
      return;
    }
  
    celsius = parseFloat(celsius);
  
    var fahrenheit = (celsius * 9/5) + 32;
    var kelvin = celsius + 273.15;
    var rankine = (celsius + 273.15) * 9/5;
  
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Fahrenheit: " + fahrenheit.toFixed(2) + " °F<br>" +
                              "Kelvin: " + kelvin.toFixed(2) + " K<br>" +
                              "Rankine: " + rankine.toFixed(2) + " °R";
  }
  