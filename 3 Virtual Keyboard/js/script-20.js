// вешаем событие на инпут
// для input подходит onchange или oninput
// onchange сработает когда input потеряет фокус
// oninput сработает при любом изменении 


// Срабатывает только для букв и цифр
// onkeypress это событие происходит когда клавиша нажата. 
// charCode - событие показывает код нажатой клавиши 
// code - событие показывает какая клавиша нажата
// key - событие показывает какая клавиша нажата
// keyCode - событие показывает код нажатой клавиши


document.querySelector('.i-01').oninput = function (event) {
   console.log(1);
   console.log(event);
}

document.querySelector('.i-02').onkeypress = function (event) {
   console.log('---------- onkeypress ----------');
   console.log('charCode:' + event.charCode); // charCode - событие показывает код нажатой клавиши
   console.log('code:' + event.code); // code - событие показывает какая клавиша нажата
   console.log('key:' + event.key); // key - событие показывает какая клавиша нажата
   console.log('keyCode:' + event.keyCode); // keyCode - событие показывает код нажатой клавиши
   // console.log(event);
}


// onkeydown событие фиксируется когда клавиша нажата но еще неотпущена
// срабативает при нажатии других клавиш верх, вниз, влево, вправо, контрл, шифт, CapsLock 

document.querySelector('.i-02').onkeydown = function (event) {
   console.log('---------- onkeydown ----------');
   console.log('charCode:' + event.charCode); // charCode - событие показывает код нажатой клавиши
   console.log('code:' + event.code); // code - событие показывает какая клавиша нажата
   console.log('key:' + event.key); // key - событие показывает какая клавиша нажата
   console.log('keyCode:' + event.keyCode); // keyCode - событие показывает код нажатой клавиши
   // console.log(event);
   if (event.key == 'CapsLock ') {
      document.querySelector('.ch-01').checked = true;
   } else {
      document.querySelector('.ch-01').checked = false;
   }
}

// событие onkeyup
document.querySelector('.i-02').onkeydown = function (event) {
   console.log('---------- onkeyup ----------');
   console.log('charCode:' + event.charCode); // charCode - событие показывает код нажатой клавиши
   console.log('code:' + event.code); // code - событие показывает какая клавиша нажата
   console.log('key:' + event.key); // key - событие показывает какая клавиша нажата
   console.log('keyCode:' + event.keyCode);
}

document.querySelector('.i-03').onkeypress = function (event) {
   console.log('---------- onkeypress ----------');
   console.log('charCode:' + event.charCode); // charCode - событие показывает код нажатой клавиши
   console.log('code:' + event.code); // code - событие показывает какая клавиша нажата
   console.log('key:' + event.key); // key - событие показывает какая клавиша нажата
   console.log('keyCode:' + event.keyCode); // keyCode - событие показывает код нажатой клавиши
   // console.log(event);
   const a = {
      q: 'w',
      w: 'e'
   }
   document.querySelector('.i-03').value += a[event.key];
   return false;
}


//! ------------------------------------------------------------------------------------------


// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. 
Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1() {
   let out1 = document.querySelector('.out-1');
   out1.innerHTML = document.querySelector('.i-1').value;

}

// ваше событие здесь!!!
document.querySelector('.i-1').oninput = t1;

//Вар2
// function t1(event) {
// 	console.log(event);
// 	document.querySelector('.out-1').textContent += event.key;
// 	return event.key;
// }

// document.querySelector('.i-1').onkeydown = t1;


// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и 
возвращает его. */

function t2(event) {
   let out2 = document.querySelector('.out-2');
   out2.innerHTML = event.charCode;
   // out2.innerHTML += event.charCode + ' ';
}

// ваше событие здесь!!!
document.querySelector('.i-2').onkeypress = t2;

//Вар 2
// function t2(event) {
// 	console.log(event);
// 	document.querySelector('.out-2').textContent += event.key;
// }

// document.querySelector('.i-2').onkeypress = t2;


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен 
символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3(event) {
   let out3 = document.querySelector('.out-3');
   // out3.innerHTML = document.querySelector('.i-3').value;
   if (event.charCode >= 48 && event.charCode <= 57) {
      out3.innerHTML = false;
   } else {
      out3.innerHTML = true;
   }

}

// ваше событие здесь!!!
document.querySelector('.i-3').onkeypress = t3;

// Вариант 2
// let w3 = 48;

// function t3(event) {
//   if (event.charCode < w3 || event.charCode > 57) {
//     document.querySelector(".out-3").innerHTML = false;
//   } else {
//     document.querySelector(".out-3").innerHTML = true;
//   }
// }

// // ваше событие здесь!!!
// document.querySelector(".i-3").onkeypress = t3;


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы 
в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4(event) {
   let out = event.key.toLowerCase(); // key - событие показывает какая клавиша нажата
   //Метод toLowerCase() возвращает значение строки, на которой он был вызван, 
   //преобразованное в нижний регистр.
   document.querySelectorAll('.i-4').value = out;
   document.querySelector('.out-4').innerHTML += out;
}
// ваше событие здесь!!!
document.querySelector('.i-4').onkeypress = t4; // onkeypress это событие происходит когда клавиша нажата.


// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы 
в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(event) {
   let out = event.key.toUpperCase(); // key - событие показывает какая клавиша нажата
   //Метод toUpperCase() возвращает значение строки, на которой он был вызван, преобразованное в верхний регистр.
   //Метод toLocaleUpperCase() возвращает значение строки, на которой он был вызван, преобразованное в верхний регистр согласно правилам преобразования регистра локали.
   document.querySelectorAll('.i-5').value = out;
   document.querySelector('.out-5').innerHTML += out;
}

// ваше событие здесь!!!
document.querySelector('.i-5').onkeypress = t5; // onkeypress это событие происходит когда клавиша нажата.


// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем 
регистре.  */

// function t6() {
//    document.querySelector('.i-6').value = document.querySelector('.i-6').value.toLowerCase();
// }

// // ваше событие здесь!!!
// document.querySelector('.i-6').onkeypress = t6;


// function t6(event) {
//    let str = '';
//    let i6 = document.querySelector('.i-6');
//    if(event.shiftKey == false){
//       event.key + str;
//        i6.value = str;
//    }
// }
// document.querySelector('.i-6').onkeypress = t6;


function t6(event) {
   event.preventDefault();
   
let lowCases = event.key.toLowerCase();
   event.target.value += lowCases;

}

// ваше событие здесь!!!
document.querySelector('.i-6').onkeypress = t6;

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ 
из массива a7 при каждом вводе символа. */

// function t7() {
//    const a7 = [];
//    let out7 = document.querySelector('.out-7');
//    a7.push(e.key);
//    out7.innerHTML = Math.floor(Math.random() * a7.length);
// }

// // ваше событие здесь!!!
// document.querySelector('.i-7').onkeypress = t7;


function t7() {
   const a7 = ['q',2.3,'w',0,'r','d','p','m',9,'h','x','b','z',7];
   document.querySelector('.out-7').textContent += a7[randSymb(0, a7.length - 1)];
};
function randSymb(min, max) {
   let rand = min - 0.5 + Math.random() * (max - min + 1);
   return Math.round(rand);
}

// ваше событие здесь!!!
document.querySelector('.i-7').onkeypress = t7;


// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input 
текст, но заменяет i на 1, o на 0, l на 7. */

// function t8(event) {
//    let out ='';

//    const a = {
//       i: '1',
//       o: '0',
//       l: '7'
//    }
//    document.querySelector('.i-8').value += a[event.key];
//    document.querySelectorAll('.i-8').value = out;
//    document.querySelector('.out-8').innerHTML += out;
//    return false;
// }


// // ваше событие здесь!!!
// document.querySelector('.i-8').onkeypress = t8;

function t8(event) {
   const a = {
            i: '1',
            o: '0',
            l: '7'
         }
let out = event.key;
for (let key in a) {
   if (key === event.key) {
       out = a[key]
   }
}
document.querySelector(".out-8").innerHTML += out;
}
// ваше событие здесь!!!
document.querySelector(".i-8").onkeypress = t8;


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t9, выводит в .out-9 количество нажатых 
клавиш стрелка вниз. */

let out9 = 0;
function t9(event) {
    if (event.code === 'ArrowDown'){
      out9++;
    } 
    else if (out9 === 0){
      return false;
    } 
    document.querySelector('.out-9').textContent = out9;
}

// ваше событие здесь!!!
document.querySelector(".i-9").onkeydown = t9;


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии 
клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. 
Клавиши стрелка вверх и вниз - увеличивать высоту изображения. 
Одно нажатие клавиши - 1px. */

let countWidth = 64;
let countHeight = 64;

function t10(event) {
    let picture = document.querySelector('.div-10 img');
    if (event.code === 'ArrowUp' || event.code === 'ArrowDown') {
        countHeight++;
        picture.height = countHeight;
    } else if (event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
        countWidth++;
        picture.width = countWidth;
    }
}

// ваше событие здесь!!!
document.querySelector('.i-10').onkeydown = t10;


// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

let keyAll = document.querySelectorAll('.key-all');

document.querySelector('.i-11').onkeydown = function () {
    activeKeyFunk();
    capsLockFunk()
};

document.querySelector('.i-11').onkeyup = activeKeyFunk;

function activeKeyFunk () {
    for (i = 0; i < keyAll.length; i++) {
        let topKeyAttribute = keyAll[i].getAttribute('data-key');
        if (event.code === topKeyAttribute) {          
            keyAll[i].classList.toggle('my-active');
        };

    }
}

let capsLockCount = 0;
function capsLockFunk () {
    if (event.code === 'CapsLock') {
        capsLockCount++;
        if (capsLockCount % 2 === 1) {
            document.querySelector('.caps-lock').classList.add('caps-lock-active');
        } else {
            document.querySelector('.caps-lock').classList.remove('caps-lock-active');
        };
    };
};