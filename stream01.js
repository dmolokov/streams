// ЧАСТЬ 1
const crypto = require('crypto');
const fs = require('fs');
const hash = crypto.createHash('md5');
const rstream = fs.createReadStream('data.txt');
const wstream = fs.createWriteStream('copy.txt');
rstream.pipe(process.stdout);
rstream
	.pipe(hash)
	.pipe(wstream)
	.on('finish', function () {
    console.log('\nКодирование завершено.');
  });
  
//Описание задания:
//
//Коллеги, доброго времени суток!
//
//Домашнее задание следующее:
//
//Часть 1.
//
//• Создать два потока: чтение и запись файла;
//• Используя crypto.createHash() вычислить md5 читаемых данных;
//• Результат вывести в консоль и записать в файл;
//• Использовать pipe() .
//