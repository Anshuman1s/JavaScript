//Primitive

/*
string,Number,Boolean,null,undefined,Sysmbol,BigInt

*/

const number = Symbol("123");
const anotherNumber = Symbol("123")

console.log(number==anotherNumber);
//========================================================
//Non-Primitive

/*
Array,object,Function

*/
//JavaScript is Dynamic Typed Language
const obj = {
    Name:"Anshuman",
    Age: 19,
    Name:"Ankur",
    Age:16
    

}
console.table([obj])