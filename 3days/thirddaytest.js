// // var firstname = 'Hoang';
// // var lastname = 'Huynh';
// // var country = 'Viet Nam';
// // var city = 'TP HCM';
// // var age = 28;
// // var isMarried = true;
// // var year = 2023;
// // console.log(typeof firstname, typeof lastname, typeof country, typeof city, typeof age, typeof isMarried, typeof year);
// // var number2 = '10';
// // if (number2 == 10) {
// //   console.log(Number(number2));
// // }
// // var number3 = parseInt('9.8');
// // if (number3 < 10) {
// //   console.log(number3 + 1);
// // }

// // function writelog() {
// //   var mystring = '';
// //   for (var param of arguments) {
// //     mystring += `${param} - `;
// //   }
// //   return console.log(mystring);
// // }
// // writelog('log 1', 'log 2 ', 'log 3');

// // var number4 = Boolean;
// // var number4 = null;
// // if (number4 !== null) {
// //   console.log('number 4 đúng');
// // } else {
// //   console.log('number4 sai');
// // }

// // var number5 = 'a';
// // var number51 = 'b';
// // var number52 = 'c';
// // if (number5 == String && number51 == String && number52 == String) {
// //   console.log('true');
// // } else {
// //   console.log('fasle');
// // }

// // var number6 = '';
// // var number61 = NaN;
// // var number62 = 0;
// // if ((number6 == false, number61 == false, number62 == false)) {
// //   console.log('true');
// // }

// // var number8 = 4 > 3; // True
// // var number9 = 4 >= 3; // True
// // var number10 = 4 < 3; // False
// // var number11 = 4 <= 3; // False
// // var number12 = 4 == 4; // True
// // var number13 = 4 === 4; // True
// // var number14 = 4 != 4; // False
// // var number15 = 4 !== 4; // False
// // var number16 = 4 != '4'; // False
// // var number17 = 4 == '4'; // True
// // var number18 = 4 === '4'; //False
// // console.log(number8, number9, number10, number11, number12, number13, number14, number15, number16, number17, number18);

// // var showmessage2 = function () {};

// // setTimeout(function () {});

// // var object = {
// //   myFunction: function () {},
// // };

// // var number19 = 'python and jargon';
// // var number19length = number19.length;
// // if (number19length > 20) {
// //   console.log(`chuoi \'${number19}\' co do dai lon hon 20`);
// // } else {
// //   console.log(`chuoi \'${number19}\' co do dai nho hon 20`);
// // }

// // // var isconfirm = confirm('Bạn là Hoàng phải không');
// // // if ((isconfirm = true)) {
// // //   console.log('xin mời thực hiện tiếp');
// // // } else {
// // //   console.log('cút');
// // // }

// // var n21 = 4 > 3 && 10 < 12; // True
// // var n22 = 4 > 3 && 10 > 12; //False
// // var n23 = 4 > 3 || 10 < 12; // True
// // var n24 = 4 > 3 || 10 > 12; // True
// // var n25 = !(4 > 3); // False
// // var n26 = !(4 < 3); // True
// // var n27 = !false; //True
// // var n28 = !(4 > 3 && 10 < 12); //false
// // var n29 = !(4 > 3 && 10 > 12); //True
// // var n30 = !(4 === '4'); //True
// // console.log(n21, n22, n23, n24, n25, n26, n27, n28, n29, n30);

// // var number31 = 'dragon and python';
// // console.log(!number31.includes('on'));

// // var number32 = new Date();
// // console.log(number32.getFullYear());
// // console.log(number32.getMonth());
// // console.log(number32.getDate());
// // console.log(number32.getDay());
// // console.log(number32.getHours());
// // console.log(number32.getMinutes());
// // console.log(number32.getTime());

// // // var daytamgiac = prompt('Hãy nhập đấy tam giac', 10);
// // // var chieucaotamgiac = prompt('Hãy nhập chiều cao tam giac', 10);
// // // var dientichtamgiac = 0.5 * daytamgiac * chieucaotamgiac;
// // // console.log(dientichtamgiac);

// // var canha = prompt('Hãy nhập cạnh a', 10);
// // var canhb = prompt('Hãy nhập cạnh b', 10);
// // var canhc = prompt('Hãy nhập cạnh c', 10);
// // var tongcaccanh = Number(canha) + Number(canhb) + Number(canhc);
// // console.log(tongcaccanh);

// // var chieudaihcn = prompt('hay nhap chieu dai:', 10);
// // var chieuronghcn = prompt('hay nhap chieu rong:', 10);
// // var dientichhcn = chieudaihcn * chieuronghcn;
// // var chuvihcn = dientichhcn / 2;
// // console.log(dientichhcn, chuvihcn);
// // const pi = 3.14;
// // var bankinhhinhtron = prompt('hay nhap ban kinh:', 10);
// // var dientichhinhtron = pi * bankinhhinhtron * bankinhhinhtron;
// // var chuvihinhtrong = 2 * pi * bankinhhinhtron;
// // console.log(dientichhinhtron, chuvihinhtrong);

// function caculateslope(x1, y1, x2, y2) {
//   return (y2 - y1) / (x2 - x1);
// }
// console.log(caculateslope(0, -2, 1, 0));

// function caculateslope2(x1, y1, x2, y2) {
//   return (y2 - y1) / (x2 - x1);
// }
// var result1 = caculateslope(0, -2, 1, 0);
// var result2 = caculateslope2(2, 2, 6, 10);
// if (result1 > result2) {
//   console.log('Phương trình 1 có độ dốc hơn Phương trình 2');
// } else {
//   console.log('Phương trình 1 có độ dốc ít hơn Phương trình 2');
// }
// // y = x^2 + 6x + 9
// function calculateY(x) {
//   return x * x + 6 * x + 9;
// }

// function findXValueForZeroY() {
//   for (let x = -100; x <= 100; x++) {
//     const y = calculateY(x);
//     if (y === 0) {
//       console.log('x =', x);
//       break;
//     }
//   }
// }

// findXValueForZeroY();

// // var hours = prompt('số giờ làm:', 10);
// // var rateperhours = prompt('lương theo giờ: ', 10);
// // console.log(hours * rateperhours);

// let firstName = 'Asabeneh';
// let lastName = 'Yetayeh';
// if (firstName.length > lastName.length) {
//   console.log(`you first name, ${firstName} is longer than your family name, ${lastName}`);
// }

// let myAge = 250;
// let yourAge = 25;
// console.log(`I am ${myAge - yourAge} years older than you.`);

// var enterbirthyear = prompt('Nhap nam sinh cua ban', 10);
// var numbnamsinh = Number(enterbirthyear);
// var today = new Date();
// var yeartoday = Number(today.getFullYear());
// // if (yeartoday - numbnamsinh >= 18) {
// //   console.log('Bạn đủ tuổi lái xe ');
// // } else {
// //   console.log(`Bạn không đủ tuổi lái xe`);
// // }

// // var yearyoulive = prompt('Bạn sống bao nhiêu năm rồi: ', 10);
// // console.log(`You lived ${yearyoulive * 365 * 24 * 60 * 60} seconds`);
// var dayday = today.getDate();
// var monthtoday = today.getMonth();
// var hourtoday = today.getHours();
// var mintoday = today.getMinutes();
// console.log(`${yeartoday}-${monthtoday + 1}-${dayday} ${hourtoday}:${mintoday}`);
