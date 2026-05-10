// object oriented program
/*
4 pillar of oop

1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism
*/
 
// const objForParson1 = {
// name:"robin",
// age:20,
// married:true,
// greeting:function(){
//   console.log("hello i am " + this.name)
// }
// }
// const objForParson2 = {
// name:"saiful",
// age:20,
// married:true,
// greeting:function(){
//   console.log("hello i am " + this.name)
// }
// }

// console.log(objForParson.name)
// console.log(objForParson.age)
// console.log(objForParson.married)
// objForParson.greeting()

class Parson {
  constructor(name,age,married){
    this.name = name;
    this.age = age;
    this.married = married;
  }
  greeting(){
    console.log("Hi i am " + this.name)
  }
 }

const user1 = new Parson("robin",20,true)
const user2 = new Parson("saiful",20,true)
user2.greeting()
console.log(Object.getOwnPropertyNames(document));