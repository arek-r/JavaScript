var list = document.getElementById('list');
var addElem = document.getElementById('addElem');

var liCount = document.getElementsByTagName('li');

addElem.addEventListener('click', function() {
	list.innerHTML += '<li>item ' + liCount.length + '</li>';
});