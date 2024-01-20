// const fun = function()
// {
//     console.log('A')
//     console.log('N')
//     console.log('S')
//     console.log('H')
//     console.log('U')
//     console.log('M')
//     console.log('A')
//     console.log('N')
// }
// fun();

/* When the result will try to print we will get undefined  */
/* function addTwoNumber(num1,num2){
    console.log(num1,num2);
}

const result = addTwoNumber(3,null)
console.log(result); */

function addTwoNumber(number1,number2){
    // let result = number1+number2;
    return number1+number2;
}

let result = addTwoNumber(12,5);
console.log( result)


function userlogin(username="Anshuman"){
    if(!username){
        console.log("Please enter the user name")
        return
    }
    return `${username} just Logged In`
}
console.log(userlogin("Hitesh"));

