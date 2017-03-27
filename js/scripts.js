var addElem = document.getElementById('addElem');

var liCount = document.getElementsByTagName('li').length;

addElem.addEventListener('click', function() {
	var liElem = document.createElement('li');
	var liText = document.createTextNode('item ' + liCount++);
	liElem.appendChild(liText);
	document.getElementById('list').appendChild(liElem);
});