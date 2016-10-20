'use strict'
const crypto = require('crypto');
const stream = require('stream');
module.exports = class MyEncryptor extends stream.Transform {
	constructor(options) {
		super(options);
		this.digester = crypto.createHash('md5');
	};
	
	_transform(chunk, enc, cb) {
		var buffer = (Buffer.isBuffer(chunk)) ? chunk : new Buffer(chunk, enc);
		this.digester.update(buffer);
		cb();
	};
	
	_flush(cb) {
		this.push(this.digester.digest('hex'));
		cb();
	};
};





