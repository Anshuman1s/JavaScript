/* This "..." method is use to change the value into Array */
// function calculatePrice(...num1){
//     return num1;
// }
// console.log(calculatePrice(100,200,199.5))


const user ={
    username:"Anshuman",
    price:399
}

function handleobj(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${"₹"+anyobject.price}`)
}
// handleobj(user);

handleobj({
    username:"sam",
    price:599
})

const array = [120,"₹599",6000,679]

function returnArrayNumber(getArray){
    return getArray[1];
}
console.log(returnArrayNumber(array))

