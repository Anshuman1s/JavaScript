//This keyword is reffred to current contest
/*
const user = {
    username:"Anshuman",
    price:1999,

    welcomemessage:function(){
        console.log(` ${this.username},welcome to website`)
        // console.log(this);
    }

}
user.username= "Ankur"
user.welcomemessage()
console.log(this)
*/
/*
const fun = function(){
    let username="Anshuman"
    console.log(this.username)
    console.log(this)
}
fun()


const chai = ()=>{
    let username = "Anshuman"q  0   
    console.log(this.username);
}
chai();
*/

/* !============IMPORTANT=================! */

const addTwo=(num1,num2) => {
    return num1+num2;

}
console.log(addTwo(12,20))

//Emplicit Return in this method we have to remove the use of parenthesis

const mulTwo = (num3,num4) => (num3*num4)

console.log(mulTwo(12,10))

const returnobj=() => ({username:"Anshuman"})

console.log(returnobj());


const Var_name = (a,b) =>{
    return a+b;
}
console.log(Var_name(12,8))


const name1 = (name) => {
    return name + " " + "Shukla"
}
console.log(name1("Anshuman"));




