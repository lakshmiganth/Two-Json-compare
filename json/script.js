let obj1 = {name:'person 1',age:25}
let obj2 = {age:25,name:'person 1'}

let obj1String = JSON.stringify(obj1);
let obj2String = JSON.stringify(obj2);


console.log(obj1String === obj2String);