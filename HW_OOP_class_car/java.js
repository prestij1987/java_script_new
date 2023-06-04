

class Car {
    construktor(model, marka, color, number, year, cena)

{
this.model = model;
this.marka = marka;
this.color = color;
this.number = number;
this.year = year;
this.cena = cena;}






// Создание таблицы
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = documant.createElement('tbody');
let tfoot = document.createElement('tfoot');

table.appendChild(thead);
table.appendChild(tbody);
table.appendChild(tfoot);

document.body.appendChild(table);

let trow = document.createElement('tr');
let trow_1 = document.createElement('tr');
let trow_2 = document.createElement('tr');
let trow_3 = document.createElement('tr');
let trow_4 = document.createElement('tr');
let trow_5 = document.createElement('tr');


let heading = document.createElement('th');
let heading_1 = document.createElement('th');
let heading_2 = document.createElement('th');
let heading_3 = document.createElement('th');
let heading_4 = document.createElement('th');
let heading_5 = document.createElement('th');



let trow_data = document.createElement('td');
let trow_data1 = document.createElement('td');
let trow_data2 = document.createElement('td');

table.appendChild('body');

trow.appendChild('thead');

thead.innerHTML= 'name';

};


let cars = [
    new Car ('reno', 'logan', 'black', 'ac123o190', 2016, 500000,),
    new Car ('opel', 'omega', 'white', 'xp601p197', 2003, 300000),
    new Car ('nissan', 'patrol', 'red', 'ea209c150', 2020, 1200000)
]

console.log(cars);



function table_new()
{

}

















class Car_new {
    construktor(marka, model, color, number, year, cena)

    {this.marka = marka; 
    this.model = model;
    this.model = color;
    this.number = number;
    this.year = year; 
    this.cena = cena;}
};


let car_new = [
    new Car_new('lada', 'vesta', 'grey', 'po450y197', 2023, 1800000)
]

