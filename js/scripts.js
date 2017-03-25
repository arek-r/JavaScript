function rysujChoinke(height) {
	//Genetate spaces
	var space = [];
	for (var i = 0; i < height; i++) {
		space[i] = ' ';
	}
	var textSpace = space.join('');

	for (var i = 0; i < height; i++) {
		var star = '*';
		for (var j = 0; j <= i*2-1; j++) {
			star += '*';
		}
		console.log(textSpace.slice(0, height - i), star);
	}
}

rysujChoinke(10);