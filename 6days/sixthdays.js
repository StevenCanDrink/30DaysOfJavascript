// // Để vượt qua thử thách này, bạn cần kết hợp nhiều kiến thức đã học như:
// // làm việc với array, đối tượng Math và loop.

// // 👉 Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length.
// // Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.

// // Gợi ý: Math.random() * (max - min) + min là cách tạo ra
// // 1 số ngẫu nhiên trong khoảng min - max.

// // function getRandNumbers(max, min, length) {
// //   var result = [];
// //   for (var i = 0; i < length; i++) {
// //     var random = Math.floor(Math.random() * (max - min + 1) + min);
// //     result.push(random);
// //   }

// //   return result;
// // }

// // var getRandNumbers1 = getRandNumbers(10, 1, 10);
// // console.log(getRandNumbers1);

// // const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];

// // const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];

// //

// // var countrieslength = countries.length;
// // var i = countrieslength - 1;
// // do {
// //   console.log(i);
// //   --i;
// // } while (i >= 0);

// // function loop(n) {
// //   for (var i = 0; i < n; i++) {
// //     console.log(i);
// //   }
// //   return i;
// // }
// // var vonglap = loop(20);
// // console.log(vonglap);
// // var array = [];
// // for (var i = 0; i < 7; i++) {
// //   var line = '#';
// //   for (var j = 1; j <= i; j++) {
// //     line += '#';
// //   }
// //   array.push(line);
// // }

// // // console.log(array);
// // console.log('i\ti^2\ti^3');
// // for (var i = 0; i < 10; i++) {
// //   var square = i * i;
// //   var cube = i * i * i;
// //   console.log(i + '\t' + square + '\t' + cube);
// // }

// // for (var i = 0; i < 100; i++) {
// //   if (i % 2 == 1) {
// //     console.log(i);
// //     continue;
// //   }
// // }

// // for (var i = 0; i < 100; i++) {
// //   var isprime = true;
// //   for (var j = 2; j <= Math.sqrt(i); j++) {
// //     if (i % j === 0) {
// //       isprime = false;
// //       break;
// //     }
// //   }
// //   if (isprime) {
// //     console.log(i);
// //   }
// // }
// // var sum = 0;
// // for (var i = 0; i <= 100; i++) {
// //   sum += i;
// //   console.log(sum);
// // }
// // var sum = 0;
// // var sum1 = 0;
// // var array = [];
// // for (var i = 0; i <= 100; i++) {
// // if (i % 2 == 0) {
// //     sum += i;
// //     continue;
// // }
// // }
// // for (var j = 0; j <= 100; j++) {
// // if (j % 2 == 1) {
// //     sum1 += j;
// //     continue;
// // }
// // }
// // console.log(`The sum of all evens from 0 to 100 is ${sum}. And the sum of all odds from 0 to 100 is ${sum1}`);
// // array.push(sum, sum1);
// // console.log(array);

// // function makearray(n) {
// //   var array = [];

// //   for (var i = 0; array.length < n; i++) {
// //     var random = Math.floor(Math.random() * n);
// //     if (array.indexOf(random) !== -1) {
// //       continue;
// //     }
// //     array.push(random);
// //   }
// //   return array;
// // }

// // var array1 = makearray(6);
// // // console.log(array1);
// // var letter = 'abcdefghijklmnopqrstuvwxyz0123456789';
// // var line = '';
// // var letterlength = letter.length;
// // for (i = 0; i < 5; i++) {
// //   var random = Math.floor(Math.random() * letter.length);
// //   line += letter[random];
// // }
// // console.log(line);

// // function randomgenerate(n) {
// //   var letter = 'abcdefghijklmnopqrstuvwxyz0123456789';
// //   var line = '';
// //   var letterlength = letter.length;
// //   for (var i = 0; i < n; i++) {
// //     var random = Math.floor(Math.random() * letterlength);
// //     line += letter[random];
// //   }
// //   return line;
// // }
// // var id = randomgenerate(12);
// // console.log(id);

// // function randomhexadecimalnumber(){
// //     var line = "#"
// //     var hexcharacter =
// // }

// // function randomrgb() {
// //   var red = Math.floor(Math.random() * 256);
// //   var green = Math.floor(Math.random() * 256);
// //   var blue = Math.floor(Math.random() * 256);

// //   var rgbcolor = `rgb(${red},${green},${blue})`;
// //   return rgbcolor;
// // }
// // var randomrgb = randomrgb();
// // console.log(randomrgb);

// // var countrieslength = countries.length;

// // // for (var i = 0; i < countrieslength; i++) {
// // //   var newarray1 = [];
// // //   newarray1.push(countries[i], countries[i].toUpperCase(), countries[i].length);
// // //   newarray.push(newarray1);
// // // }
// // // console.log(newarray1);
// // // console.log(newarray);
// // var newarray = [];
// // var hascountrywithia = false;
// // var maxlength = 0;
// // for (var i = 0; i < countrieslength; i++) {
// //   if (countries[i].length > maxlength) {
// //     maxlength = countries[i].length;
// //     newarray = [countries[i]];
// //     hascountrywithia = true;
// //     continue;
// //   }
// // }
// // if (hascountrywithia) {
// //   console.log(newarray);
// // } else {
// //   console.log(countries);
// // }

// // function Country(ten, chuviettat, dodai) {
// //   this.name = ten;
// //   this.viettat = chuviettat;
// //   this.length = dodai;
// // }
// // var country = new Country(countries, newarray, newarray1);
// // console.log(country);

// // var newarray = [];

// // var webtechslength = webTechs.length;
// // var maxwebtechlength = 0;
// // var longestWebTech = '';
// // for (var i = 0; i < webTechs.length; i++) {
// //   if (webTechs[i].length > maxwebtechlength) {
// //     maxwebtechlength = webTechs[i].length;
// //     longestWebTech = webTechs[i];
// //     continue;
// //   }
// // }
// // console.log(longestWebTech);
// // for (var j = 0; j < webTechs.length; j++) {
// //   var newarray1 = [];
// //   newarray1.push(webTechs[j], webTechs[j].length);
// //   newarray.push(newarray1);
// // }
// // console.log(newarray);

// // const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
// // mernStacklength = mernStack.length;
// // var acronym = '';
// // for (var z = 0; z < mernStack.length; z++) {
// //   acronym += mernStack[z][0];
// // }
// // console.log(acronym);

// // for (const webtech of webTechs) {
// //   console.log(webtech);
// // }
// // const fruit = ['banana', 'orange', 'mango', 'lemon'];
// // var fruitlength = fruit.length;
// // for (var i = fruitlength - 1; i >= 0; --i) {
// //   console.log(fruit[i]);
// // }

// // const fullStack = [
// //   ['HTML', 'CSS', 'JS', 'React'],
// //   ['Node', 'Express', 'MongoDB'],
// // ];
// // for (const stack of fullStack) {
// //   for (const program of stack) {
// //     console.log(program);
// //   }
// // }
// const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
// const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
// const countries1 = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya'];
// var countriescopy = Array.from(countries1);
// var sortcountries = countries1.slice().sort();
// console.log(countriescopy);
// console.log(sortcountries);
// console.log(mernStack.slice().sort());
// console.log(webTechs.slice().sort());

// const countries2 = [
//   'Afghanistan',
//   'Albania',
//   'Algeria',
//   'Andorra',
//   'Angola',
//   'Antigua and Barbuda',
//   'Argentina',
//   'Armenia',
//   'Australia',
//   'Austria',
//   'Azerbaijan',
//   'Bahamas',
//   'Bahrain',
//   'Bangladesh',
//   'Barbados',
//   'Belarus',
//   'Belgium',
//   'Belize',
//   'Benin',
//   'Bhutan',
//   'Bolivia',
//   'Bosnia and Herzegovina',
//   'Botswana',
//   'Brazil',
//   'Brunei',
//   'Bulgaria',
//   'Burkina Faso',
//   'Burundi',
//   'Cambodia',
//   'Cameroon',
//   'Canada',
//   'Cape Verde',
//   'Central African Republic',
//   'Chad',
//   'Chile',
//   'China',
//   'Colombi',
//   'Comoros',
//   'Congo (Brazzaville)',
//   'Congo',
//   'Costa Rica',
//   "Cote d'Ivoire",
//   'Croatia',
//   'Cuba',
//   'Cyprus',
//   'Czech Republic',
//   'Denmark',
//   'Djibouti',
//   'Dominica',
//   'Dominican Republic',
//   'East Timor (Timor Timur)',
//   'Ecuador',
//   'Egypt',
//   'El Salvador',
//   'Equatorial Guinea',
//   'Eritrea',
//   'Estonia',
//   'Ethiopia',
//   'Fiji',
//   'Finland',
//   'France',
//   'Gabon',
//   'Gambia, The',
//   'Georgia',
//   'Germany',
//   'Ghana',
//   'Greece',
//   'Grenada',
//   'Guatemala',
//   'Guinea',
//   'Guinea-Bissau',
//   'Guyana',
//   'Haiti',
//   'Honduras',
//   'Hungary',
//   'Iceland',
//   'India',
//   'Indonesia',
//   'Iran',
//   'Iraq',
//   'Ireland',
//   'Israel',
//   'Italy',
//   'Jamaica',
//   'Japan',
//   'Jordan',
//   'Kazakhstan',
//   'Kenya',
//   'Kiribati',
//   'Korea, North',
//   'Korea, South',
//   'Kuwait',
//   'Kyrgyzstan',
//   'Laos',
//   'Latvia',
//   'Lebanon',
//   'Lesotho',
//   'Liberia',
//   'Libya',
//   'Liechtenstein',
//   'Lithuania',
//   'Luxembourg',
//   'Macedonia',
//   'Madagascar',
//   'Malawi',
//   'Malaysia',
//   'Maldives',
//   'Mali',
//   'Malta',
//   'Marshall Islands',
//   'Mauritania',
//   'Mauritius',
//   'Mexico',
//   'Micronesia',
//   'Moldova',
//   'Monaco',
//   'Mongolia',
//   'Morocco',
//   'Mozambique',
//   'Myanmar',
//   'Namibia',
//   'Nauru',
//   'Nepal',
//   'Netherlands',
//   'New Zealand',
//   'Nicaragua',
//   'Niger',
//   'Nigeria',
//   'Norway',
//   'Oman',
//   'Pakistan',
//   'Palau',
//   'Panama',
//   'Papua New Guinea',
//   'Paraguay',
//   'Peru',
//   'Philippines',
//   'Poland',
//   'Portugal',
//   'Qatar',
//   'Romania',
//   'Russia',
//   'Rwanda',
//   'Saint Kitts and Nevis',
//   'Saint Lucia',
//   'Saint Vincent',
//   'Samoa',
//   'San Marino',
//   'Sao Tome and Principe',
//   'Saudi Arabia',
//   'Senegal',
//   'Serbia and Montenegro',
//   'Seychelles',
//   'Sierra Leone',
//   'Singapore',
//   'Slovakia',
//   'Slovenia',
//   'Solomon Islands',
//   'Somalia',
//   'South Africa',
//   'Spain',
//   'Sri Lanka',
//   'Sudan',
//   'Suriname',
//   'Swaziland',
//   'Sweden',
//   'Switzerland',
//   'Syria',
//   'Taiwan',
//   'Tajikistan',
//   'Tanzania',
//   'Thailand',
//   'Togo',
//   'Tonga',
//   'Trinidad and Tobago',
//   'Tunisia',
//   'Turkey',
//   'Turkmenistan',
//   'Tuvalu',
//   'Uganda',
//   'Ukraine',
//   'United Arab Emirates',
//   'United Kingdom',
//   'United States',
//   'Uruguay',
//   'Uzbekistan',
//   'Vanuatu',
//   'Vatican City',
//   'Venezuela',
//   'Vietnam',
//   'Yemen',
//   'Zambia',
//   'Zimbabwe',
// ];
// var newarray = [];
// var countrynamelength = 0;
// var longestcountryname = '';
// var countries2length = countries2.length;
// // var countries2length = countries2.length;
// // for (var i = 0; i < countries2length; i++) {
// //   if (countries2[i].includes('land')) {
// //     newarray.push(countries2[i]);
// //     continue;
// //   }
// // }
// // console.log(newarray);

// // for (var j = 0; j < countries2length; j++) {
// //   if (countries2[j].length > countrynamelength) {
// //     countrynamelength = countries2[j].length;
// //     longestcountryname = countries2[j];
// //     continue;
// //   }
// // }
// // console.log(longestcountryname);
// for (var i = 0; i < countries2length; i++) {
//   if (countries2[i].length >= 2) {
//     newarray.push(countries2[i]);
//     continue;
//   }
// }
// console.log(newarray);
// var countriesnewarray2 = [];

// for (var j = countries2length - 1; j >= 0; --j) {
//   var newarray3 = [];
//   newarray3.push(countries2[j]);
//   countriesnewarray2.push(newarray3);
// }
// console.log(countriesnewarray2);

// for (country of countriesnewarray2) {
//   console.log(country);
// }
