var triangleWidth = prompt("Podaj długość boku trójkąta:");
var triangleHeight = prompt("Podaj wysokość trójkąta:");
var triangleArea = (triangleWidth * triangleHeight) / 2;
console.log("Pole trójkąta o długości boku: " + triangleWidth + " i wysokości: " + triangleHeight + " wynosi: " + triangleArea);
document.getElementById("triangleWidth").innerHTML = triangleWidth;
document.getElementById("triangleHeight").innerHTML = triangleHeight;
document.getElementById("triangleArea").innerHTML = triangleArea;