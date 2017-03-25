var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';

// Remove commas
for (var i = 0; i < text.length; i++) {
	var text = text.replace(',', '');
}

var words = text.split(' ');

animal = animal.toUpperCase();

text = text.replace(words[0], animal);
console.log(text);

var shortText = text.slice(0, (text.length / 2));
console.log(shortText);