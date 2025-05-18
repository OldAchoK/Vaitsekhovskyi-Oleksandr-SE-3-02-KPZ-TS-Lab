// 1 variables initialization
let stringExample   :   string;
stringExample   =   "test";
let numberExample   :   number;
numberExample   =   0;
let booleanExample  :   boolean;
booleanExample  =   false;
let arrayExample    =   [];
arrayExample = ['0','1',]
let objectExample   =   {};

// code result
console.log(typeof stringExample);
console.log(typeof numberExample);
console.log(typeof booleanExample);
console.log(typeof arrayExample);
console.log(typeof objectExample);

//2 function
//class of object to past in function
class Person {
  name: string;
  age: number;
 
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
//function that operates
function toString(obj:  Person)
{
    return  "Name: " + obj.name + " Age: " + obj.age;
}

//function result
let person = new Person("Billy", 54);
console.log(toString(person));