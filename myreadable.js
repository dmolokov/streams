'use strict'
const stream = require('stream');
const random = require('./random');
module.exports = class MyReadable extends stream.Readable {
	constructor(options) {
		super(options);
	};
	
	_read(n) {
		this.push(random(1, 100).toString());
	};
};





