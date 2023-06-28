// const sports = [
//   {
//     name: 'Bóng rổ',
//     like: 6,
//   },
//   {
//     name: 'Bơi lội',
//     like: 5,
//   },
//   {
//     name: 'Bóng đá',
//     like: 10,
//   },
// ];

// function getMostFavoriteSport() {
//   return sports.filter(function (sports) {
//     return sports.like > 5;
//   });
// }
// // Kỳ vọng
// console.log(getMostFavoriteSport(sports));
// // Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

// var sports = [
//   {
//     name: 'Bơi lội',
//     gold: 11,
//   },
//   {
//     name: 'Boxing',
//     gold: 3,
//   },
//   {
//     name: 'Đạp xe',
//     gold: 4,
//   },
//   {
//     name: 'Đấu kiếm',
//     gold: 5,
//   },
// ];

// var i = 0;
// function getTotalGold(sports) {
//   i++;
//   return sports.reduce(function (acc, currentvalue) {
//     return acc + currentvalue.gold;
//   }, 0);
// }

// // Expected results:

// console.log(getTotalGold(sports)); // Output: 23

var watchList = [
  {
    Title: 'Inception',
    Year: '2010',
    Rated: 'PG-13',
    Released: '16 Jul 2010',
    Runtime: '148 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer: 'Christopher Nolan',
    Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy',
    Plot: 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
    Language: 'English, Japanese, French',
    Country: 'USA, UK',
    imdbRating: '8.8',
    imdbVotes: '1,446,708',
    imdbID: 'tt1375666',
    Type: 'movie',
  },
  {
    Title: 'Interstellar',
    Year: '2014',
    Rated: 'PG-13',
    Released: '07 Nov 2014',
    Runtime: '169 min',
    Genre: 'Adventure, Drama, Sci-Fi',
    Director: 'Christopher Nolan',
    Writer: 'Jonathan Nolan, Christopher Nolan',
    Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: 'English',
    Country: 'USA, UK',
    imdbRating: '8.6',
    imdbVotes: '910,366',
    imdbID: 'tt0816692',
    Type: 'movie',
  },
  {
    Title: 'The Dark Knight',
    Year: '2008',
    Rated: 'PG-13',
    Released: '18 Jul 2008',
    Runtime: '152 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer: 'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
    Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
    Plot: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    Language: 'English, Mandarin',
    Country: 'USA, UK',
    imdbRating: '9.0',
    imdbVotes: '1,652,832',
    imdbID: 'tt0468569',
    Type: 'movie',
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    Rated: 'PG-13',
    Released: '15 Jun 2005',
    Runtime: '140 min',
    Genre: 'Action, Adventure',
    Director: 'Christopher Nolan',
    Writer: 'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
    Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
    Plot: 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
    Language: 'English, Urdu, Mandarin',
    Country: 'USA, UK',
    imdbRating: '8.3',
    imdbVotes: '972,584',
    imdbID: 'tt0372784',
    Type: 'movie',
  },
  {
    Title: 'Avatar',
    Year: '2009',
    Rated: 'PG-13',
    Released: '18 Dec 2009',
    Runtime: '162 min',
    Genre: 'Action, Adventure, Fantasy',
    Director: 'James Cameron',
    Writer: 'James Cameron',
    Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
    Plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    Language: 'English, Spanish',
    Country: 'USA, UK',
    imdbRating: '7.9',
    imdbVotes: '876,575',
    imdbID: 'tt0499549',
    Type: 'movie',
  },
];

function calculateRating(watchList) {
  var filmofchris = watchList.filter(function (watchList, currentvalue) {
    return watchList.Director == 'Christopher Nolan';
  }, []);
  var SumofIMDB = filmofchris.reduce(function (acc, currentvalue) {
    return acc + parseFloat(currentvalue.imdbRating);
  }, 0);
  var AverageofIMDB = SumofIMDB / filmofchris.length;
  return AverageofIMDB;
}

// Expected results
console.log(calculateRating(watchList)); // Output: 8.675

var arr = [
  ['name', 'Sơn Đặng'],
  ['age', 18],
];
// Expected results:

// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

function sumCb(a, b) {
  return a + b;
}

function subCb(a, b) {
  return a - b;
}

function multiCb(a, b) {
  return a * b;
}

function divCb(a, b) {
  return a / b;
}

function caculate(a, b, cb) {
  return cb(a, b);
}

// Kết quả dự kiến
caculate(1, 2, sumCb); // Kết quả: 3
caculate(1, 2, subCb); // Kết quả: -1
caculate(1, 2, multiCb); // Kết quả: 2
caculate(1, 2, divCb); // Kết quả: 3

Array.prototype.myMap = function (cb) {
  arraylength = this.length;
  array = [];
  for (var i = 0; i < arraylength; i++) {
    var results = cb(this[i], i);
    array.push(results);
  }
  return array;
};

var courses = ['PHP', 'Ruby', 'Javascript', 'Javascript'];

var mymap = courses.myMap((courses, index) => courses + 'a');
console.log(mymap);

Array.prototype.myforEach = function (cb) {
  arraylength = this.length;
  for (var i = 0; i < arraylength; i++) {
    var results = cb(this[i]);
  }
  return results;
};

courses.myforEach((courses) => console.log(courses + '2'));
Array.prototype.find2 = function (cb) {
  var arraylength = this.length;
  for (var i = 0; i < arraylength; i++) {
    if (cb(this[i], i)) {
      return this[i];
    }
  }
  return undefined;
};

var coursefind = courses.find2((courses) => courses.length > 2);
console.log(coursefind);

Array.prototype.filter2 = function (cb) {
  var arraylength = this.length;
  var array = [];
  for (var i = 0; i < arraylength; i++) {
    if (cb(this[i], i)) {
      array.push(this[i]);
    }
  }
  return array;
};

var coursesfilter = courses.filter2((courses) => courses.length > 3);
console.log(coursesfilter);

Array.prototype.reduce2 = function (cb, result) {
  var i = 0;
  if (arguments.length < 2) {
    var i = 1;
    result = this[0];
  }
  var arraylength = this.length;

  for (; i < arraylength; i++) {
    result = cb(result, this[i], i, this);
  }
  return result;
};

var coursesreduce = courses.reduce2((acc, currentvalue, index) => acc.concat(currentvalue), []);
console.log(coursesreduce);

var number = [1, 2, 3, 4, 5, 6];

Array.prototype.some2 = function (cb) {
  var arraylength = this.length;
  for (var i = 0; i < arraylength; i++) {
    if (cb(this[i], i)) {
      return true;
    }
  }
  return false;
};

var numbersome = number.some2((num) => num > 2);
console.log(numbersome);

Array.prototype.every2 = function (cb) {
  var arraylength = this.length;
  for (var i = 0; i < arraylength; i++) {
    if (!cb(this[i], i)) {
      return false;
    }
  }
  return true;
};

var numberevery = number.every2((num) => num > 2);
console.log(numberevery);

Array.prototype.forEach3 = function (cb) {
  var arraylength = this.length;
  for (var i = 0; i < arraylength; i++) {
    cb(this[i], i);
  }
};
var courseforeach3 = courses.forEach3((course, index) => console.log(course, index));

Array.prototype.myFilter2 = function (cb) {
  arraylength = this.length;
  array = [];
  for (var i = 0; i < arraylength; i++) {
    if (cb(this[i], i, this)) {
      array.push(this[i]);
    }
  }
  return array;
};
const numbers = [1, 2, 3, 4];

var numbersfilter = numbers.myFilter2((number, index, array) => array.length % 2 === 0);
console.log(numbersfilter);

Array.prototype.mySome = function (cb) {
  var arraylength = this.length;
  for (var i = 0; i < arraylength; i++) {
    if (cb(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

const numbers1 = [1, 3, 3, 5];
var numbersome = numbers1.mySome((num, index, array) => array.length % 2 === 0);
console.log(numbersome);

Array.prototype.myEvery = function (cb) {
  var arraylength = this.length;
  for (var i = 0; i < arraylength; i++) {
    if (!cb(this[i], i, array)) {
      return false;
    }
  }
  return true;
};

var numbermyevery = numbers1.myEvery((numb) => numb % 2 !== 0);
console.log(numbermyevery);
