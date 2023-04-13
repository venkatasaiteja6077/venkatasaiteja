function calculateBMI() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value) / 100; // convert to meters
  var bmi = weight / (height * height);
  document.getElementById("result").value = bmi.toFixed(2); // show BMI with 2 decimal places
}
