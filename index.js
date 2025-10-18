//Уровень 1-Простой

/*Условные операторы. 
Необходимо написать команду, которая спрашивает возраст пользователя через prompt()*/
let age = prompt("Укажите Ваш возраст");
if (age<18){
    alert("Доступ запрещён!");
} if (age>=18) {
    alert('Доступ разрешён!');
}
//тернарный оператор
let isNowAge=prompt('Укажите Ваш возраст');
alert(isNowAge,18?"Доступ запрещён!":"Доступ разрешён!");

//Конструкция switch
let weekdayNumber=prompt('Укажите номер дня недели');
switch(Number(weekdayNumber)) {
    case 1:
alert('Понедельник');
break;
    case 2:
alert('Вторник');
break;
    case 3:
alert('Среда');
break;
    case 4:
alert('Четверг');
break;
    case 5:
alert('Пятница');
break;
    case 6:
alert('Суббота');
break;
    case 7:
alert('Воскресенье');
break;
    default:
alert('Ошибка! Такого дня нет.');
break;        
}

//Цикл while
let i=1;
while (i<6) {
    console.log(i);
    i++
}

//Цикл for
for (let i=1; i<=10; i++) {
    console.log(i * i);
}

//Уровень 2-Умеренный

//Логические операторы
const isAdmin = true; // Указывает, является ли пользователь администратором  
const hasToken = false; // Указывает, есть ли у пользователя доступ
    if (isAdmin||hasToken) {
    console.log('Доступ разрешен!'); 
    } else {console.log('Нет доступа!');
    }

//Комбинации &&, ||, !
let x=13;
if (10<=x<=20 && x!=15){
    console.log("true");
} else {
    console.log("false");
}

//Цикл с условием
let N=5;
while(N>=0) {
    console.log(N);
    N--;
}

//break и continue
for (let x=1; x<=10; x++) { 
    if (x===7) {
        continue;
    }
    if (x===9) {
        break;
    }
console.log(x);
}

//Практика: длина наибольшего отрезка
const a = 7;
const b = 9;
const c = 5;
 let max=0;
    if (a>b && a>c) {
        console.log(max=a);
    }
    if (b>a && b>c) {
        console.log(max=b);
    }
    if (c>b && c>a) {
        console.log(max=c);
    }
