const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

var countriesforeeach = countries.forEach((acc) => console.log(acc));
var nameforeach = names.forEach((acc) => console.log(acc));
var numberforEach = numbers.forEach((acc) => console.log(acc));
var countriesformap = countries.map((acc) => acc.toUpperCase());
console.log(countriesformap);
var countriesformap1 = countries.map((acc) => acc.length);
console.log(countriesformap1);
var countriesformap2 = countries.map((acc) => `${acc.charAt(0)}${acc.slice(1)}`);
console.log(countriesformap2);
var numbersmap = numbers.map((numb) => numb * numb);
console.log(numbersmap);
var productmap = products.map((product) => console.log(product));
var countriesfilter = countries.filter((acc) => acc.endsWith('land'));
console.log(countriesfilter);
var countriesfilter2 = countries.filter((acc) => acc.length == 6);
console.log(countriesfilter2);
var countriesfilter3 = countries.filter((acc) => acc.startsWith('E'));
console.log(countriesfilter3);
var productfilter = products.filter((acc) => console.log(acc));
var productfilterfilter = products.filter((acc) => typeof acc.price === 'number');
console.log(productfilterfilter);
function getStringLists(array) {
  var array1 = [];
  var arrayLength = array.length;
  for (var i = 0; i < arrayLength; i++) {
    if (typeof array[i] != 'string') {
      continue;
    }
    array1.push(array[i]);
  }
  return array1;
}

var numbersreduce = numbers.reduce((acc, numb) => acc + numb);
console.log(numbersreduce);

var countriesreduce = countries.reduce(function (acc, country, index) {
  if (index === 0) {
    return acc + ', ' + country;
  } else if (index === countries.length - 1) {
    return acc + ', and ' + country;
  } else {
    return acc + ', ' + country;
  }
}, 'Estonia');

console.log(`${countriesreduce} are north European countries`);

var namessome = names.some((name) => name.length > 7);
console.log(namessome);
var countriesevery = countries.every((country) => country.includes('land'));
console.log(countriesevery);
var countriesfind = countries.find((country) => country.length === 6);
console.log(countriesfind);
var countriesfindindex = countries.findIndex((country) => country.length === 6);
console.log(countriesfindindex);
var countriesfindindex2 = countries.findIndex((country) => country === 'Norway');
console.log(countriesfindindex2);
var countriesfindindex3 = countries.findIndex((country) => country === 'Russia');
console.log(countriesfindindex3);

// var productfilter1 = products.filter((product) => typeof product.price === 'number');
// var productsmap = productfilter1.map((product) => product.price);
// var sumproduct = productsmap.reduce((acc, numb) => acc + numb, 0);

var sumproduct = products
  .filter((product) => typeof product.price === 'number')
  .map((product) => product.price)
  .reduce((acc, numb) => acc + numb, 0);

console.log(sumproduct);

var sumproduct2 = products.reduce((acc, product) => (typeof product.price === 'number' ? [...acc, product.price] : acc), []).reduce((acc, price) => acc + price);
console.log(sumproduct2);

const countries2 = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

function categorizeCountries() {
  var countries2reduce = countries2.reduce((acc, country) => {
    if (country.includes('land') || country.endsWith('ia') || country.includes('island') || country.includes('stan')) {
      return [...acc, country];
    } else {
      return acc;
    }
  }, []);
  return countries2reduce;
}
console.log(categorizeCountries());

var result = {};
var getfirstletter = countries2.forEach((country) => {
  const firstLetter = country[0].toUpperCase();
  if (result[firstLetter]) {
    result[firstLetter]++;
  } else {
    result[firstLetter] = 1;
  }
});
var LetterCounts = Object.entries(result).map(([letter, count]) => ({ letter, count }));

console.log(LetterCounts);

var getfirstTencountries = countries2.filter((country, index) => index < 10);
console.log(getfirstTencountries);
var countries2length = countries2.length;
var getlastTencountries = countries2.filter((country, index) => index > countries2length - 11);
console.log(getlastTencountries);

const maxCount = Math.max(...LetterCounts.map((letter) => letter.count));
const letterCountBiggest = LetterCounts.filter((currentvalue) => currentvalue.count === maxCount);
console.log(letterCountBiggest);
