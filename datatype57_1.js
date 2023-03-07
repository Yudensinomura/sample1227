let obj = { student: {name:"table" , age: 30 }};


console.log( "I am",obj.student);

let map = new Map();

map.set('1','str1');
map.set(1,'num1');
map.set(true,'bool1');
map.set(false,'bool2');

console.log( map.get(1) );
console.log( map.get('1'));

console.log(map.size)
