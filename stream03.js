// ����� 3
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
	
//��� ��������� ������ � ��������: 
//� ����������� ���� ����� �� ������: Readable, Writable, Transform
//� Readable ����� ������ ������������ ����������� ���-�� ��������� ����;
//� Writable ����� ������ �������� ���������� ������ ����� _write � �������;
//� Transform ����� ������ ���-���� �������� ������ � ���������� �� �� ����������
//���������, �� � ����������� � 1 ���;
//� ������������ pipe() .
// 
//�������!