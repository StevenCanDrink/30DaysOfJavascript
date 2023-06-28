var name = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
var name1 = '    30 Days Of JavaScript    ';
var name2 = '30 Days Of JavaScript';
var phrasename = 'You cannot end a sentence with because because because is a conjunction';
console.log(name);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substr(1, 2));
console.log(name.substring(1, 3));
console.log(name.includes('30'));
console.log(name.substring(3));
console.log(name.split());
console.log(name.split(' '));
console.log(name.replace('Facebook', 'Hoangcompany'));
console.log(name.charCodeAt('G'));
console.log(name.lastIndexOf('a'));
console.log(phrasename.split(' ').indexOf('because'));
console.log(phrasename.split(' ').lastIndexOf('because'));
console.log(phrasename.search('because'));
console.log(name1.trim());
console.log(name.endsWith('Amazon'));
console.log(name.match('a'));
console.log(name.repeat(2));
console.log(name2.substr(0, 10) + name2.substring(10));
console.log(name.concat(name1, name2));
console.log('The quote ' + "'There is no exercise better for the heart than reaching down and lifting people up.'" + ' by John Holmes teaches us to help one another.');
console.log('The quote' + "' Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.'" + ' by Mother Terasa');
var a = '9';
var numa = parseInt(a);
if ((numa = 10)) {
  console.log(numa);
} else {
  console.log(numa + 1);
}
/////////
var b = '9.8';
var floatb = parseFloat(b);
var intb = parseInt(b);
if (floatb > 10) {
  console.log(b);
} else {
  console.log(intb + 1);
}

var C = 'python';
var D = 'jargon';
console.log(C.includes('on') == D.includes('on'));
if (D == String) {
  console.log(D);
}

const numb = 50.14;
const numb2 = Math.floor(Math.random(Math.floor(numb)) * 50 + 50);
console.log(numb2);
var javascript = 'Javascript';
var randomnumberjava = Math.floor(Math.random() * javascript.length);
var randomaphalbet = javascript.charAt(randomnumberjava);
console.log(randomaphalbet);

console.log(phrasename.substring(phrasename.indexOf('because'), phrasename.lastIndexOf('is')));
var sentenceLove = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
var countlove = /love/g;
var arraylove = sentenceLove.match(countlove);
console.log(arraylove.length);

var countbecause = /because/gi;
var arraybecause = phrasename.match(countbecause);
console.log(arraybecause.length);
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
const sentence2 = sentence.replace(/[^\w\s]/gi, '');
console.log(sentence2);
var lastquestion = " 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
var arraylastquestion = lastquestion.match(/\d+/g);
var interarray = arraylastquestion.map((Element) => parseInt(Element));
console.log(interarray);
var sum = 0;
for (var i = 0; i < interarray.length; i++) {
  sum += interarray[i];
}
console.log(sum);

var n = 10;
var createCounter = function (n) {
  var counter = -1;
  return () => {
    return ++counter + n;
  };
  console.log(createCounter);
};
