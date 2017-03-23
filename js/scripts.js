var femaleNames = ['Anna', 'Joanna', 'Dominika', 'Magda', 'Julia'];
var maleNames = ['Marek', 'Darek', 'Arek', 'Sebastian', 'Karol'];

//Merging Arrays
var allNames = [];
allNames = allNames.concat(femaleNames, maleNames);
console.log('Zawartość połączonych tablic: ' + allNames);

//Add value into Array
var name = 'Aleksandra';
console.log('Chcesz wstawić imię: ' + name);
(allNames.indexOf(name) === -1) ? allNames.push(name) : console.log('Podane imię jest już w tablicy');
console.log(allNames);