function getTriangleArea(a, h) {
	if((a <= 0) || (h <= 0)) {
		return ('Podałeś błędne dane. Wymiary nie mogą być mniejsze bądź równe 0.');
	}
	else {
		var wynik = (a * h) / 2;
		return wynik;
	}
}

console.log(getTriangleArea(10, 6));

var firstTriangleArea = getTriangleArea(12, 9),
	secondTriangleArea = getTriangleArea(-13, 8),
	thirdTriangleArea = getTriangleArea(7, 5.6);

console.log('Pole pierwszego trójkąta wynosi: ' + firstTriangleArea);
console.log('Pole drugiego trójkąta wynosi: ' + secondTriangleArea);
console.log('Pole trzeciego trójkąta wynosi: ' + thirdTriangleArea);