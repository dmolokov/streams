'use strict'
const stream = require('stream');
module.exports = class MyWritable extends stream.Writable {
	constructor(options) {
		super(options);
	};
	
	_write(chunk, encoding, done) {
		console.log(chunk.toString());
		done();
	}
};





