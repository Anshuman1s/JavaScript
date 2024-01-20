console.log("jai Bajarang Bali")

/*
let a = 12;
const b = 100;
var c = 120;

if(true){
    // console.log("INNER:"+ a)
    let a = 110;
    const b = 900;
    var c = 700;
    console.log("INNER:"+a)
    console.log("INNER:"+b)
    console.log("INNER:"+c)
}
console.log("Outer:"+a)
    console.log("Outer:"+b)
    console.log("Outer"+c)



function fun(){
    const username = "Anshuman"
    function child(){
        const website ="anshuman.com"
        console.log(`Name is ${username} and website is ${website}`)
    }
    // console.log(website)
    child();
}
fun()
*/

function fun(num1){
    return num1+1;
}
//In this scenario function call takes place after the the declaration of function 
console.log(fun(12))


/* ===IMPORTANT!=== */
//In this case we are calling the function before declaration and it will not throw any Error
console.log(fun2(13))
function fun2(num2){
    return num2+1;
}

/* SECOND Method */
//In this method we can't call the function before declaration it will throw an Error
const fun3 = function(num3){
    return num3*10
}
console.log(fun3(12))