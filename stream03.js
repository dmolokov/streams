// ЧАСТЬ 3
const MyReadable = require('./myreadable');
const MyWritable = require('./mywritable');
const MyTransform = require('./mytransform');
const myreadable = new MyReadable();
const mywritable = new MyWritable();
const mytransform = new MyTransform();
myreadable.pipe(mytransform);
mytransform.pipe(mywritable);
mytransform.on('data', function(record) {
	mytransform.pause();
	setTimeout(function() {
		mytransform.resume();
	},1000);
});
	
//Для получения зачета с отличием: 
//• Реализовать свой класс на основе: Readable, Writable, Transform
//• Readable класс должен генерировать бесконечное кол-во случайных цифр;
//• Writable класс должен выводить полученные данные через _write в консоль;
//• Transform класс должен как-либо изменять данные и передавать их на дальнейшую
//обработку, но с интервалами в 1 сек;
//• Использовать pipe() .
// 
//Успехов!