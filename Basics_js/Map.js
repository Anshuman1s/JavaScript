const array = [1,2,3,4,5,6,7,8,9,10]

//const newArray = array.map((num)=>num+10)
//const newArray2 = array.map((number)=>{
 //   return number%2
//})
// console.log(newArray2)
// console.log(newArray)
/*
const LogIn = ["Anshuman","Ankur","Saumya","Anmol","Mukku","TukTuk"]
const Id = LogIn.map((email )=>{
    return email+"@lepses.in"
})
console.log(Id)
*/
 const newArray = array.map((num)=> num*10).map((num)=>num+1).filter((num)=> num>50)
 console.log(newArray)
