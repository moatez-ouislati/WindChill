function calculateWindChill() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var windspeed = parseFloat(document.getElementById("windspeed").value);
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("wci");

    // Convert mph to km/h if necessary
    if (unit === "mph") {
        windspeed = windspeed * 1.60934; // Convert mph to km/h
    }

    // Wind chill formula
    var windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windspeed, 0.16)) + (0.3965 * temperature * Math.pow(windspeed, 0.16));
    
    // Display result rounded to one decimal place
    resultElement.innerHTML = "Wind Chill Index: " + windChill.toFixed(1) + "°C";
}