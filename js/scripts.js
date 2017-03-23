var a = prompt('Podaj warość zmiennej a:');
var b = prompt('Podaj warość zmiennej b:');
var value = (a * a) + (2 * a * b) - (b * b);

if (value < 0) {
	console.log('Wynik jest mniejszy od zera i wynosi: ' + value);
}
else if (value > 0) {
	console.log('Wynik jest większy od zera i wynosi: ' + value);
}
else {
	console.log('Wynik jest równy 0');
}