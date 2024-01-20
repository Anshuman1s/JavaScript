//Singleton 

//Object Literals
const mysym = Symbol("mykey1")
const jsuser={
    name:"Anshuman",
    age:18,
    [mysym]:"mykey1", //This is the method of symbol in object 
    email:"anshuman@google.com",
    location:"Jalandhar",
    LastLoggedIn:"Phagwara",
    isLoggedIn:false,

    LastLoginDays:["Monday","Saturday","Sunday"]
}

//Accessing the element by two methods 1st is

console.log(jsuser.name)
console.log(jsuser["email"])
console.log(typeof jsuser[mysym])
console.log(jsuser.LastLoginDays)

//changing the value of email in object 

jsuser.name="Ankur shukla";
console.log(jsuser["name"])
//freezing the object so value cant't be change after using the freez method

Object.freeze(jsuser);
//This age will not reflact there because i freez the the object so no one can change the value of any pair
jsuser.age=20;
console.log(jsuser["age"])
console.log(jsuser)

// jsuser.greeting = function(){
//     console.log("Hey JSUser!")
// }
// jsuser.greetingTwo = function(){
//     console.log(`Hey js User ${this.name}`)
// }
// console.log(jsuser.greeting());
// console.log(jsuser.greetingTwo());
