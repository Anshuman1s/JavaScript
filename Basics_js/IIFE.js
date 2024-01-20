//Immediately Invoked Function Expressions (IIFE)

(function ans() {
    console.log(`DB Connected`)
})

();

//Sometimes we face the problem with global scope pollution so we for this problem we use IIFE
//When we two Immediately invoked function expression we have to use semi colen for that otherwise we will get error
//Without named IIFE
( (Versions) => {
    console.log("Working with node"+ `${ Versions}`)
})(" 1200");
//This is named IIFE
( function naam(){
    console.log("Anshuman shukla is the author of this code");
})
();