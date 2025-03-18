function convert(){
let inputValue = document.getElementById("userInput").value;
const unit = document.getElementById("unit").value;
const milesToKm = unit === 'milesToKm';
let result = 0;
let resultString = 0;
if (milesToKm) {
result = (inputValue * 1.60934);
resultString = inputValue + " miles are " + result + " km";
} else {
result = (inputValue / 1.60934);
resultString = inputValue + " km are " + result + " miles";
}
const resultElement = document.getElementById('resultElement');
resultElement.innerHTML = resultString;
}
