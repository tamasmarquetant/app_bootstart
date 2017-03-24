// this is just placeholder code demonstarting a working BABEL-es2015-preset and BROWSERIFY
// --> DELETE and insert your app code

var fs = require('fs');

var obj;

var materials = [
	'ADDED_TEXT_1',
	'ADDED_TEXT_2',
	'ADDED_TEXT_3',
	'ADDED_TEXT_4'
];

var materialsLength = materials.map((material) => {
	document.getElementById('firstLine').innerHTML += ` ` + material + ` `;
  	return material.length;
});