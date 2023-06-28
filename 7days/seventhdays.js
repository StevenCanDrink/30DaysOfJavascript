function Fullname() {
  console.log(`Huynh Minh Hoang`);
}
Fullname(); //CAU 1

function fullname(firstname, lastname) {
  var fullname = `${firstname} ${lastname}`;
  return fullname;
}

var fullname1 = fullname('Minh Hoang', 'Huynh');
console.log(fullname1); //CAU 2

function addNumbers(a, b) {
  var sum = a + b;
  return sum;
}
var sum1 = addNumbers(7, 6);
console.log(sum1); // CAU 3

function areaOfRectangle(length, width) {
  var areaOfRectangle = length * width;
  console.log(areaOfRectangle);
}
areaOfRectangle(3, 4); //  CAU 6

function perimeterofrectangle(length, width) {
  var perimeterofrectangle = 2 * (length + width);
  console.log(perimeterofrectangle);
}
perimeterofrectangle(5, 4); // CAU 5

function volumeofrectangle(length, width, height) {
  var volumeofrectangle = length * width * height;
  console.log(volumeofrectangle);
}
volumeofrectangle(5, 6, 10); // CAU 6

function areaOfCircle(r) {
  var areaOfCircle = Math.PI * r * r;
  console.log(areaOfCircle);
}
areaOfCircle(3); // CAU 7

function Circumference(r) {
  var Circumference = 2 * Math.PI * r;
  console.log(Circumference);
}
Circumference(10); // CAU 8

function Densityofasubstance(mass, volume) {
  var Densityofasubstance = mass / volume;
  console.log(Densityofasubstance);
}
Densityofasubstance(5, 10); // CAU 9

function speed(distance, time) {
  var speed = distance / time;
  console.log(speed);
}
speed(50, 150); // CAU 10

function weight(mass, gravity) {
  var weight = mass * gravity;
  console.log(weight);
}
weight(100, 150); // CAU 11

function oF(oC) {
  var oF = (oC * 9) / 5 + 32;
  console.log(oF);
}
oF(39); // CAU 12

function checkBMI(weight, height) {
  var BMI = weight / (height * height);
  if (BMI < 18.5) {
    console.log('You are underweight');
  } else if (BMI < 25) {
    console.log('You are Normalweight');
  } else if (BMI < 30) {
    console.log('You are Overweight');
  } else {
    console.log('You are Obese');
  }
}

checkBMI(75, 1.75); // CHÚ Ý ĐƠN VỊ LÀ KG VÀ MÉT // CÂU 13

// function CheckSeason(month) {
//   var monthlowercase = month.toLowerCase();
//   if (monthlowercase == 'january' || monthlowercase == 'february' || monthlowercase == 'march') {
//     console.log("It's Winter");
//   } else if (monthlowercase == 'april' || monthlowercase == 'may' || monthlowercase == 'june') {
//     console.log("It's Spring");
//   } else if (monthlowercase == 'july' || monthlowercase == 'august' || monthlowercase == 'September') {
//     console.log("It's Summer");
//   } else if (monthlowercase == 'october' || monthlowercase == 'november' || monthlowercase == 'december') {
//     console.log("It's Autumn");
//   } else {
//     console.log('Error 404');
//   }
// }
// var month = prompt('Enter the Month: ', String);
// CheckSeason(month); // CAU 14

function findMax(...args) {
  var Maxnumber = Math.max(...args);
  console.log(Maxnumber);
}
findMax(5, 10, 1000, 500, 200, 50, 5, 6, 7); // CAU 15

function solveLinEquation(a, b, c, y) {
  // var ax + by + c = 0
  // ==> ax = -by - c
  let x = (-b * y - c) / a;
  if (a === 0) {
    console.log("IT'S NOT LINEAREQUATION");
  }
  return x;
} // CAU 16

var solvele = solveLinEquation(5, 6, 7, 8);
console.log(solvele);

function solveQuadEquation(a, b, c) {
  Delta = b ** 2 - 4 * a * c;
  if (Delta > 0) {
    x1 = (-b + Math.sqrt(Delta)) / (2 * a);
    x2 = (-b - Math.sqrt(Delta)) / (2 * a);
    return [x1, x2];
  } else if (Delta == 0) {
    x = -b / (2 * a);
    return x;
  } else {
    return 'No real Solution';
  }
}

var giaiphuongtrinh = solveQuadEquation(2, -7, 3);
console.log(giaiphuongtrinh); // CAU 17

function printarray(...args) {
  return (array = [...args]);
}
var printarray1 = printarray(1, 3, 5, 6, 7, 8, 2);
console.log(printarray1); // CAU 18

function showDateTime() {
  var Day = new Date();
  var Daymonth = ('0' + (Day.getMonth() + 1)).slice(-2);
  var Day1 = ('0' + Day.getDate()).slice(-2);
  var year = Day.getFullYear();
  var timeminutes = Day.getMinutes();
  var timehours = Day.getHours();
  console.log(`${Day1}/${Daymonth}/${year} ${timehours}:${timeminutes}`);
}
showDateTime(); // CAU 19

function swapvalue(x, y) {
  var [x, y] = [y, x];
  return [x, y];
}
var swapvalue1 = swapvalue(1, 2);
console.log(swapvalue1); // CAU 20

function reversearray(...args) {
  var array = [...args];
  var array1 = [];
  for (i = array.length - 1; i >= 0; --i) {
    array1.push(array[i]);
  }
  console.log(array1);
}

reversearray(0, 1, 2, 3, 4, 5, 6); // CAU 21

function capitalizeArray(...args) {
  var array = [...args];
  var arraylength = array.length;
  var array1 = [];
  for (i = 0; i < arraylength; i++) {
    array1.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
  }
  console.log(array1);
}
capitalizeArray('hoang', 'mai', 'hieu', 'thinh', 'duyen', 'khai', 'thao', 'hung'); // CAU 22

function additem(a, ...args) {
  var array = [...args];
  array.push(a);
  console.log(array);
}
additem('Mai', 1, 2, 3, 4, 5, 6, 7, 0); //CAU 23

function removeitem(index, ...args) {
  var array = [...args];
  var arraylength = array.length;
  if (index >= 0 && index < arraylength) {
    array.splice(index, 1);
    console.log(array);
  } else {
    console.log(`ERROR 404`);
  }
}
removeitem(10, 'hoang', 'mai', 'hieu', 'thinh', 'duyen', 'khai', 'thao', 'hung');
function sumOfNumbers(...args) {
  var array = [...args];
  var arraylength = array.length;
  var sum = 0;
  for (var i = 0; i < arraylength; i++) {
    sum += array[i];
  }
  return sum;
}

var sumofnumber = sumOfNumbers(1, 2, 3, 4, 5, 6, 7, 0);
console.log(sumofnumber);

function sumOfOdds(...args) {
  var array = [...args];
  var arraylength = array.length;
  var sum = 0;
  for (var i = 0; i < arraylength; i++) {
    var isnumodds = true;
    if (array[i] % 2 == 0) {
      var isnumodds = false;
      continue;
    }
    sum += array[i];
  }
  console.log(sum);
}
sumOfOdds(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function sumOfEven(...args) {
  var array = [...args];
  var arraylength = array.length;
  var sum = 0;
  for (var i = 0; i < arraylength; i++) {
    if (array[i] % 2 != 0) {
      continue;
    }
    sum += array[i];
  }
  console.log(sum);
}
sumOfEven(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function evensAndOdds(a) {
  console.log(`The number of odds are ${a / 2}`);
  console.log(`The number of evens are ${a / 2 + 1}`);
}
evensAndOdds(100);

function sum1(...args) {
  var sum = 0;
  var array = [...args];
  var arrayLength = array.length;
  for (var i = 0; i < arrayLength; i++) {
    sum += array[i];
  }
  console.log(sum);
}

function randomUserIp() {
  var array = [];
  for (var i = 0; i < 5; i++) {
    var random = Math.floor(Math.random() * 10);
    array.push(random);
  }
  console.log(`1${array[0]}${array[1]}.${array[2]}.${array[3]}.${array[4]}`);
}
randomUserIp();

function randomMacAddress() {
  var macAddress = [];
  for (var i = 0; i < 6; i++) {
    var pair = '';
    for (var j = 0; j < 2; j++) {
      var letter = '0123456789ABCDEF';
      var random = Math.floor(Math.random() * letter.length);
      pair += letter.charAt(random);
    }
    macAddress.push(pair);
  }
  var formattedMacAddress = macAddress.join(':');
  console.log(formattedMacAddress);
}

randomMacAddress();

function randomHexaNumberGenerator() {
  var line = '#';
  var letter = '0123456789ABCDEF';
  var letterlength = letter.length;
  for (var i = 0; i < 6; i++) {
    var random = Math.floor(Math.random() * letterlength);
    line += letter[random];
  }
  console.log(line);
}
randomHexaNumberGenerator();

function userIdGenerator() {
  let lowercaseMin = 97;
  let lowercaseMax = 122;
  let uppercaseMin = 65;
  let uppercaseMax = 90;
  let numberMin = 48;
  let numberMax = 57;
  var array = [];
  for (var i = 0; i < 7; i++) {
    let randomCharCode;
    let category = Math.floor(Math.random() * 3);

    if (category === 0) {
      randomCharCode = Math.floor(Math.random() * (lowercaseMax - lowercaseMin + 1) + lowercaseMin);
    } else if (category === 1) {
      randomCharCode = Math.floor(Math.random() * (uppercaseMax - uppercaseMin + 1) + uppercaseMin);
    } else {
      randomCharCode = Math.floor(Math.random() * (numberMax - numberMin + 1) + numberMin);
    }
    array.push(String.fromCharCode(randomCharCode));
  }
  console.log(array.join(''));
}
userIdGenerator();

function userIdGeneratedByUser() {
  var numbercharacter = 5; //prompt('Hãy nhập độ dài của chuỗi:', 5);
  var numberid = 5; //prompt('Hãy nhập số lượng ID cần tạo:', 6);
  var array = [];
  let lowercaseMin = 97;
  let lowercaseMax = 122;
  let uppercaseMin = 65;
  let uppercaseMax = 90;
  let numberMin = 48;
  let numberMax = 57;
  for (var i = 0; i < numberid; i++) {
    var pair = '';
    for (j = 0; j < numbercharacter; j++) {
      let randomCharCode;
      let category = Math.floor(Math.random() * 3);
      if (category === 0) {
        randomCharCode = Math.floor(Math.random() * (lowercaseMax - lowercaseMin + 1) + lowercaseMin);
      } else if (category === 1) {
        randomCharCode = Math.floor(Math.random() * (uppercaseMax - uppercaseMin + 1) + uppercaseMin);
      } else {
        randomCharCode = Math.floor(Math.random() * (numberMax - numberMin + 1) + numberMin);
      }
      pair += String.fromCharCode(randomCharCode);
    }
    array.push(pair);
  }
  console.log(array);
}

userIdGeneratedByUser();

let category = Math.floor(Math.random() * 3);
console.log(category);

function rgbColorGenerator() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  console.log(`rgb(${red},${green},${blue})`);
}
rgbColorGenerator();

function arrayOfHexaColors(n) {
  var hexadigi = '0123456789ABCDEF';
  var hexadigilength = hexadigi.length;
  var array = [];
  for (var i = 0; i < n; i++) {
    hexacolor = '#';
    for (var j = 0; j < 6; j++) {
      random = Math.floor(Math.random() * hexadigilength);
      hexacolor += hexadigi[random];
    }
    array.push(hexacolor);
  }
  console.log(array);
}

arrayOfHexaColors(5);

function arrayOfRgbColors(n) {
  var array = [];
  for (var i = 0; i < n; i++) {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    array.push(`rgb(${red},${green},${blue})`);
  }
  console.log(array);
}

arrayOfRgbColors(2);

function convertHexaToRgb(hex) {
  hex = hex.replace('#', '');
  var array = [];
  var r = parseInt(hex.substr(0, 2), 16);
  var g = parseInt(hex.substr(2, 2), 16);
  var b = parseInt(hex.substr(4, 2), 16);

  array.push(`rgb(${r},${g},${b})`);
  console.log(array);
}
convertHexaToRgb('#B57906');

function convertRgbToHexa(r, g, b) {
  var rhexacolor = r.toString(16);
  var ghexacolor = g.toString(16);
  var bhexacolor = b.toString(16);
  stringrhexacolor = ('0' + rhexacolor).slice(-2);
  stringghexacolor = ('0' + ghexacolor).slice(-2);
  stringbhexacolor = ('0' + bhexacolor).slice(-2);
  console.log(`#${stringrhexacolor}${stringghexacolor}${stringbhexacolor}`);
}
convertRgbToHexa(181, 121, 6);

function generateColors(type, length) {
  if (type === 'hexa') {
    return arrayOfHexaColors(length);
  } else if (type === 'rgb') {
    return arrayOfRgbColors(length);
  } else {
    console.log('Invalid type specified');
    return [];
  }
}

generateColors('rgb', 3);

function shufflearray(array) {
  var arraylength = array.length;
  for (var i = arraylength - 1; i > 0; --i) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
var array2 = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(shufflearray(array2));

function isEmpty(array) {
  isEmpty = true;
  arraylength = array.length;
  for (var i = 0; i < array.length; i++) {
    if (i !== 0) {
      isEmpty = false;
      break;
    }
  }
  console.log(isEmpty);
}
arrayempty = [];
isEmpty(arrayempty);

function sumOfArrayItems(array) {
  var arraylength = array.length;
  for (var i = 0; i < arraylength; i++) {
    if (typeof array[i] === 'string') {
      console.log('lỗi không thể cộng được');
      return;
    }
  }
  var sum = sumarray(array);
  console.log(sum);
}

function sumarray(array) {
  sum = 0;
  var arraylength = array.length;
  for (var i = 0; i < arraylength; i++) {
    sum += array[i];
  }
  return sum;
}
sum3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sumOfArrayItems(sum3);

function average(array) {
  var arraylength = array.length;
  for (var i = 0; i < arraylength; i++) {
    if (typeof array[i] === 'string') {
      console.log('lỗi không thể cộng được');
      return;
    }
  }
  var sum = sumarray(array);
  var average = sum / arraylength;
  console.log(average);
}

average(sum3);

function modifyArray(array) {
  var arraylength = array.length;
  if (arraylength < 5) {
    console.log('Not Found');
    return;
  }
  array.splice(4, 1, array[4].toUpperCase());
  console.log(array);
}

array2 = ['Avocado', 'Tomato', 'Potato', 'Mango', 'LEMON', 'Carrot'];
modifyArray(array2);

function isPrime(number) {
  var isPrime = false;
  if (number <= 1) {
    console.log(isPrime);
    return;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      console.log(isPrime);
      return;
    }
  }
  var isPrime = true;
  console.log(isPrime);
}

isPrime(7);

function checksunique(array) {
  var uniqueSet = new Set(array);
  return uniqueSet.size === array.length;
}

var arraytest16 = [1, 2, 3, 4, 5, 6];
console.log(checksunique(arraytest16));

function checkallitemsametype(array) {
  var arraylength = array.length;
  for (var i = 0; i < arraylength; i++) {
    for (var j = 0; j < arraylength; j++) {
      if (typeof array[i] !== typeof array[j]) {
        return false;
      }
    }
  }
  return true;
}

var arr1 = [1, 2, 3, 4, 5];

console.log(checkallitemsametype(arr1));

function isValidVariable(a) {
  var string = a;
  if (!string.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/)) {
    console.log('Invalid variable name');
    return false;
  }
  return true;
}

var string = 'invalidVariable';
console.log(isValidVariable(string)); // Output: false

function sevenRandomNumbers() {
  var array = [];

  for (var i = 0; i < 7; i++) {
    var random;
    do {
      random = Math.floor(Math.random() * 10);
    } while (array.includes(random));

    array.push(random);
  }

  console.log(array);
}

sevenRandomNumbers();

function reverseCountries(array) {
  var countriescopy = [...array];
  var countriescopylength = countriescopy.length;
  var array1 = [];
  for (var i = countriescopylength - 1; i >= 0; --i) {
    array1.push(countriescopy[i]);
  }
  console.log(array1);
}
array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
reverseCountries(array3);
