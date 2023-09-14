/*
let x = 10;
while (x > 0) {
  x = x - 1;
  if (x % 2 === 0) {
    console.log('even', x);
    continue;
  }
  console.log('odd', x);
}
*/



/*
for (let k in j) {
    console.log(k);
}


let j = { name: 'mern', type: 'course', lang: 'js' };

for (let v of j) {
    console.log(v);
}


const nums = [10, 45, 23];

for (let num of nums) {
    console.log(num);
}
*/

let j = { name: 'mern', type: 'course', lang: 'js' };

j['phone'] = '123';

for (let k in j) {
  console.log(j[k]);
}