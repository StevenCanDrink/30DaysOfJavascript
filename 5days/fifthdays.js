// function Student(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
// }

// var student = new Student('Long', 'Bui');

// console.log(student.firstName); // 'Long'
// console.log(student.lastName); // 'Bui'
// console.log(student.getFullName()); // 'Long Bui'

// function getNextYear() {
//   var date = new Date();
//   var getyear = date.getFullYear();
//   return getyear + 1;
// }

// var getnextyear = getNextYear();
// console.log(getnextyear);

// // Hãy tạo hàm getRandomItem, hàm này nhận 1 tham số là
// // mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng
// function getRandomItem(array) {
//   var random = Math.floor(Math.random() * array.length);
//   return array[random];
// }

// var array = ['bua', 'lo', 'keo', 'bao', 'Chai', 'Sung'];
// var ketqua = getRandomItem(array);
// console.log(ketqua);

// // Để vượt qua thử thách này, hãy hoàn thành hàm cho trước để đáp ứng các yêu cầu sau:

// // Khi a chia hết cho 3 thì return về 1
// // Khi a chia hết cho 5 thì return về 2
// // Khi a chia hết cho 15 thì return về 3

// function run(a) {
//   if (a % 15 === 0) {
//     return 3;
//   } else if (a % 5 === 0) {
//     return 2;
//   } else if (a % 3 === 0) {
//     return 1;
//   }
// }

// var a1 = run(3);
// var a2 = run(5);
// var a3 = run(15);

// console.log(a1); // 1
// console.log(a2); // 2
// console.log(a3); // 3

// function run(fruits) {
//   var result;

//   switch (fruits) {
//     case 'Banana':
//       result = 'This is a Banana';
//       break;
//     case 'Apple':
//       result = 'This is an Apple';
//       break;
//     default:
//       result = 'No fruits';
//   }

//   return result;
// }

// Làm bài
//Để vượt qua thử thách này bạn cần tạo hàm getCanVoteMessage, hàm này có 1 tham số là age.
//  Trong trường hợp từ 18 tuổi trở lên hàm sẽ
// // trả về Bạn có thể bỏ phiếu, ngược lại hàm trả về Bạn chưa được bỏ phiếu.
// function getCanVoteMessage(age) {
//   var result = age > 17 ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu';
//   return result;
// }

// var age1 = getCanVoteMessage(18);
// var age2 = getCanVoteMessage(15);
// console.log(age1);
// console.log(age2);

var array = [1, 'Bolivia', 3, 'Denmark', 'Ethiopia'];
// console.log(array);
// console.log(array.length);
// console.log(array.pop());
// console.log(array.shift());

console.log(array[0]);
console.log(array[array.length - 1]);
console.log(array[Math.floor(array.length / 2)]);

function mixedDataTypes(...args) {
  var array = args;
  return array;
}

var array1 = mixedDataTypes(1, 2, 'Hoang', 'Huynh', '');
console.log(array1);

function itCompanies(...args) {
  var array = args;
  return array;
}
var array2 = itCompanies('Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon');
// console.log(array2);

// console.log(array2.length);

// console.log(array2[0]);
// console.log(array2[array2.length - 1]);
// console.log(array2[Math.floor(array2.length / 2)]);
array2.forEach(function (company) {
  console.log(company.toUpperCase());
});

console.log(`${array2.toString()} are big IT Compannies`);
console.log(array2.join(' o '));
console.log(array2.sort());
console.log(array2.reverse());
console.log(array2.slice(0, 3));
console.log(array2.slice(-3));
console.log(array2.splice(0, array2.length));

console.log(array2);
