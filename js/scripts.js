function getTriangleArea(a, h) {
	var wynik = '';
	if ((a <= 0) || (h <= 0)) {
		wynik = 'Podałeś błędne dane. Wymiary nie mogą być mniejsze bądź równe 0.';
	} else {
		wynik = (a * h) / 2;
	}
	return wynik;
}

var firstTriangleArea = getTriangleArea(12, 9);
var secondTriangleArea = getTriangleArea(-13, 8);
var	thirdTriangleArea = getTriangleArea(7, 5.6);

console.log('Pole pierwszego trójkąta wynosi: ' + firstTriangleArea);
console.log('Pole drugiego trójkąta wynosi: ' + secondTriangleArea);
console.log('Pole trzeciego trójkąta wynosi: ' + thirdTriangleArea);