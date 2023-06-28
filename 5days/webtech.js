const webTechs = ['Sass', 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];
var themdaucach = webTechs.join(', ');
console.log(themdaucach);

let text = `I love teaching and empowering people. I teach ${themdaucach}`;
console.log(text);
console.log(text.split(' '));
var array = text.split(' ');
console.log(array.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.push('Sugar');
shoppingCart.unshift('meat');
console.log(shoppingCart);
shoppingCart.splice();

var vitricuahoney = shoppingCart.indexOf('Honey');
shoppingCart.splice(vitricuahoney, 1);
console.log(shoppingCart);
var vitricuatea = shoppingCart.indexOf('Tea');
shoppingCart.splice(vitricuatea, 1, 'Green Tea');
// shoppingCart[3] = 'Green tea'
console.log(shoppingCart);

var indexofSass = webTechs.indexOf('Sass');
var additemSass = 'Sass';
if (indexofSass >= 0) {
  console.log(`${additemSass} is a CSS preprocess`);
} else {
  webTechs.unshift(additemSass);
  console.log(webTechs);
}
