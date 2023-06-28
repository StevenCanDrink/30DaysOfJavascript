// // var age = prompt('hay dien so tuoi', 10);
// // var numbage = Number(age);
// // if (numbage > 18) {
// //   console.log(' you enough old to drive');
// // } else {
// //   console.log(` you are left with ${18 - numbage} years to drive`);
// // }

// var myage = 28;
// var yourage = prompt('Hay dien so tuoi cua ban', 10);
// if (yourage > myage) {
//   console.log(`you are ${yourage - myage} older than me`);
// } else {
//   console.log(`you are ${myage - yourage} younger than me`);
// }

// let a = 4;
// let b = 3;
// switch (true) {
//   case a > b:
//     console.log(`${a} greater than ${b}`);
//     break;
//   default:
//     console.log(`null`);
// }

// var number2 = prompt(' enter the number', 2);
// var sodu = Number(number2) % 2;
// switch (sodu) {
//   case (sodu = 0):
//     console.log(`${number2} la so chan `);
//     break;
//   case (sodu = 1):
//     console.log(`${number2} la so le`);
//     break;
//   default:
//     console.log('ban khong nhap so nguyen');
// }

// var yourscore = prompt('your score is: ');
// var numbyourscore = Number(yourscore);
// switch (true) {
//   case yourscore >= 80:
//     console.log(`your grade is A`);
//     break;
//   case yourscore >= 70:
//     console.log(`your grade is B`);
//     break;
//   case yourscore >= 60:
//     console.log(`your grade is C`);
//     break;
//   case yourscore >= 50:
//     console.log(`your grade is D`);
//     break;
//   case yourscore > 0:
//     console.log(`your grade is F`);
//     break;
//   default:
//     console.log(' your score is not grade');
// }

// // var today = prompt('what is the day today?', 10);
// // var lowertoday = today.toLowerCase();
// // if (lowertoday == 'saturday') {
// //   console.log(`${capitalizefirstletter(lowertoday)} is the weekends`);
// // } else if (lowertoday == 'sunday') {
// //   console.log(`${capitalizefirstletter(lowertoday)} is the weekends`);
// // } else if (lowertoday == 'monday' || lowertoday == 'tuesday' || lowertoday == 'wednesday' || lowertoday == 'thursday' || lowertoday == 'friday') {
// //   console.log(`${capitalizefirstletter(lowertoday)} is the workingdays`);
// // } else {
// //   console.log('you typed wrongs days');
// // }

// // function capitalizefirstletter(lowertoday) {
// //   return lowertoday.replace(/^\w/, (match) => match.toUpperCase());
// // }

// // var monthtoday = prompt('your month: ', 10);
// // var lowermonthtoday = monthtoday.toLowerCase();
// // if (lowermonthtoday == 'september' || lowermonthtoday == 'october' || lowermonthtoday == 'november') {
// //   console.log('the season is Autumn');
// // } else if (lowermonthtoday == 'december' || lowermonthtoday == 'january' || lowermonthtoday == 'february') {
// //   console.log('the season is Winter');
// // } else if (lowermonthtoday == 'march' || lowermonthtoday == 'april' || lowermonthtoday == 'may') {
// //   console.log('the season is Spring');
// // } else if (lowermonthtoday == 'june' || lowermonthtoday == 'july' || lowermonthtoday == 'august') {
// //   console.log('the season is Summer');
// // } else {
// //   console.log('Wrong month');
// // }
// var month = parseInt(prompt('Hãy nhập tháng', '10'));
// var year = parseInt(prompt('Hãy nhập năm', '2023'));
// function getnumberofdays(month, year) {
//   return new Date(year, month, 0).getDate();
// }
// var numberofdays = getnumberofdays(month, year);
// if (!isNaN(month) && month > 0 && month < 13 && !isNaN(year)) {
//   console.log(numberofdays);
// } else {
//   console.log('ban nhap sai du lieu roi');
// }
// var mystring = 'sssss';
// console.log(mystring.split(''));
// console.log(mystring.toUpperCase);

function getLastElement(animal) {
  return animal.slice(2, 3);
}

// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']
