'use strict';
var objType = require('obj-type');

function remove(el, str) {
	if (el.classList) {
		el.classList.remove(str);
		return;
	}

	el.className = el.className.split(' ').filter(function (x) {
		return x !== '' && x !== str.trim();
	}).join(' ');
}

module.exports = function (el, str) {
	if (objType(el).indexOf('element') === -1 && objType(el) !== 'nodelist') {
		throw new TypeError('Expected HTML DOM element(s) as first argument');
	}

	if (typeof str !== 'string') {
		throw new TypeError('Expected a string as second argument');
	}

	if (objType(el).indexOf('element') !== -1) {
		remove(el, str);
	}

	for (var i = 0; i < el.length; i++) {
		remove(el[i], str);
	}
};
