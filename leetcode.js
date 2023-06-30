// var gain = [-4, -3, -2, -1, 4, 3, 2];
// var sum = 0;
// var array = [0];
// for (i = 0; i < gain.length; i++) {
//   array.push((sum += gain[i]));
// }
// newarray = new Set(array);
// newarray1 = [...newarray];
// console.log(Math.max(...newarray1));

// var nums = [3, 2, 4];
// var target = 6;
// var array = [];
// for (var i = 0; i < nums.length; i++) {
//   var sum = 0;
//   for (j = 0; j < i; j++) {
//     sum = nums[j] + nums[i];
//     if (sum === target) {
//       array.push(j, i);
//       break;
//     }
//   }
// }

// console.log(array);

// var l1 = [9, 9, 9, 9, 9, 9, 9];
// var l2 = [9, 9, 9, 9];

// const l1reverse = l1.reverse((vl) => vl);
// const l2reverse = l2.reverse((vl) => vl);
// var C1 = parseInt(l1reverse.join('')) + parseInt(l2reverse.join(''));
// const result = Array.from(C1.toString());
// console.log(result.reverse((vl) => vl));

// var isPalindrome = function (x) {
//   var array = x.toString().split('');
//   var newarray = array.reverse((a, b) => b - a);
//   let newnumber = parseInt(newarray.join(''));
//   return newnumber === x;
// };
// console.log(isPalindrome(121));

// var s = '{[]}';

// const stack = [];
// const openingBrackets = ['(', '{', '['];
// const closingBrackets = [')', '}', ']'];
// const bracketmap = { ')': '(', '}': '{', ']': '[' };
// var slength = s.length;
// var isvalid = true;
// for (var i = 0; i < slength; i++) {
//   var char = s[i];
//   console.log(bracketmap[char]);
//   if (openingBrackets.includes(char)) {
//     stack.push(char);
//   } else if (closingBrackets.includes(char)) {
//     if (stack.length === 0 || bracketmap[char] !== stack.pop()) {
//       var isvalid = false;
//     }
//   }
// }
// console.log()
// var users = [
//   {
//     id: 1,
//     name: ' Kiem Dam',
//   },
//   {
//     id: 2,
//     name: ' Son Dang',
//   },
//   {
//     id: 3,
//     name: ' Hung Dam',
//   },
// ];

// var comments = [
//   {
//     id: 1,
//     user_id: 1,
//     content: 'Anh son chua ra video :(',
//   },
//   {
//     id: 2,
//     user_id: 2,
//     content: 'Vua ra xong em oi',
//   },
// ];

// function getcomments() {
//   return new Promise((rs) => {
//     setTimeout(() => rs(comments), 2000);
//   });
// }
// function getusersbyid(userids) {
//   return new Promise((rs) => {
//     var result = users.filter((user) => {
//       return userids.includes(user.id);
//     });
//     setTimeout(() => rs(result), 2000);
//   });
// }
// getcomments()
//   .then((comments) => {
//     var userid = comments.map((vl) => vl.user_id);
//     return getusersbyid(userid).then((users) => {
//       return {
//         users: users,
//         comments: comments,
//       };
//     });
//   })
//   .then((data) => {
//     console.log(data);
//     var title = document.createElement('div');
//     document.body.appendChild(title);
//     var html = '';
//     data.comments.forEach((comments) => {
//       var user = data.users.find((user) => {
//         return user.id === comments.user_id;
//       });
//       html += `<li>${user.name}:${comments.content}</li>`;
//     });
//   });
