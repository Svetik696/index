/*Условные операторы. 
Необходимо написать команду, которая спрашивает возраст пользователя через prompt()*/
let accessAllowed;
let age=prompt('Каков твой возраст?', '');
if (age<18) {
    accessAllowed='Доступ запрещён!';
} else if (age>=18) {
    accessAllowed='Доступ разрешён!';
}
console.log(accessAllowed);