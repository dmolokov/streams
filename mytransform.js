'use strict'
const stream = require('stream');
module.exports = class MyTransform extends stream.Transform {
	constructor(options) {
		super(options);
	};
	
	_transform(chunk, enc, cb) {
		let buffer = (Buffer.isBuffer(chunk)) ? chunk : new Buffer(chunk, enc);
		this.push((buffer*2).toString());
		cb();
	};
	
	_flush(cb) {
		cb();
	};
};





