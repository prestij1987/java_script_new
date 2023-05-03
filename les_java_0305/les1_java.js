

/* console.log('Мне 37!'); */

function calculate_age() {
	// Значение (value) есть не у всего!
	// value - значение - это атрибут
	// у input есть такой атрибут даже если в html изначально его нет
	let year = document.getElementById('kuku').value;
	let age = 2023 - year;  // создать переменную и присвоить ей значение
	return age;
}

function show_age() {
	// js "легко" складывает числа и строки
	// получаются строки
	console.log('Мне ' + calculate_age() + ' лет');
}