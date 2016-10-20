// ЧАСТЬ 2
const fs = require('fs');
const rstream = fs.createReadStream('data.txt');
const wstream = fs.createWriteStream('copy.txt');
const MyEncryptor = require('./myencryptor');
const myencryptor = new MyEncryptor();

rstream.pipe(myencryptor);
myencryptor.pipe(process.stdout);
myencryptor.pipe(wstream);

//Описание задания: 
//Часть 2.
//• Расширить предыдущие решение используя stream.Transform ;
//• Реализовать свой класс, что будет конвертировать результат crypto.createHash()
//(бинарные данные - хеш-сумма) в hex формат;
//• Результат вывести в консоль и записать в файл;
//• Использовать pipe() .
// 