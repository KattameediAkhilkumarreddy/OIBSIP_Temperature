function convertTemperature() {
    const temperatureInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    const resultArea = document.getElementById("result");

    if (isNaN(temperatureInput)) {
        resultArea.textContent = "Please enter a valid number.";
        return;
    }

    const temperature = parseFloat(temperatureInput);

    if (unit === "celsius") {
        const convertedTemperature = (temperature * 9/5) + 32;
        resultArea.textContent = `Converted Temperature: ${convertedTemperature}°F`;
    } else {
        const convertedTemperature = (temperature - 32) * 5/9;
        resultArea.textContent = `Converted Temperature: ${convertedTemperature}°C`;
    }
}