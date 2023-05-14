
document.querySelector('button').onclick= my_func();

function my_func() {
    let f = document.getElementById('second_name').value;
    //console.log(f)
    document.querySelector('.string1').innerHTML = f;

    //Добавление записи в таблицу фамилии
    
    let name = document.getElementsByClassName('.name').value;
    document.querySelector('.string2').innerHTML = name;
    //Добавление в таблицу имени

    let l = document.getElementById('last_name').value;
    document.querySelector('.string3').innerHTML = l;
    // Добавление в таблицу отчество

    let year = document.getElementById('age').value;
    document.querySelector('.status').innerHTML = year;
    //Добавление года

    if(year <= 15) {
        alert('Вы еще ребенок');

    } else if(year >= 25) {
        alert('Вы уже взрослый');
    } else if(year >= 55) {
        alert('Вы уже пожилой');
    } else{
        console.log('Вы уже старик');
    };



};

