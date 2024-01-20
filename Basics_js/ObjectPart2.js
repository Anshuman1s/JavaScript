//const tinderUser = new Object() This is singleTon object

//const tinderUser ={} This is not a singleTon Object


const tinderUser = {};

tinderUser.id=12202172;
tinderUser.name = "Sammy";
tinderUser.LoggedIn=false;

// console.log(tinderUser)
// console.log(typeof tinderUser)

const regularUser = {
    email:"anshumanshukla@google.com",
    fullname:{
        Firstname:"Anshuman",
        Last_Name:"Shukla"
    }
}
console.log(regularUser.fullname.Firstname)

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"k",
    4:"L"
}
const obj3={
    5:"k",
    6:"L"
}

// const merge = Object.assign({},obj1,obj2,obj3)
//Most of the time we have to use the spread concept
//Merge all the spread object in single object 
const obj4 = {...obj1,...obj2}
// console.log(obj4)

// console.log(tinderUser)
/* --> This object.keys change the object value into array form and show the result <--- */
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

//This method we use rarely
// console.log(Object.entries(tinderUser))

//SomeTImes this method is also use

console.log(tinderUser.hasOwnProperty('LoggedIn'))
console.log(tinderUser.hasOwnProperty('Logged'))