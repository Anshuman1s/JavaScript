const array = [1,2,3];
// const acc = 0;
// const myTotal = array.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`)
//     return acc+currval;
// },0)
// console.log(myTotal)

// const myTotal = array.reduce((acc,currval)=> acc+currval,0)
// console.log(myTotal)

const course = [
    {
        course:"Python",
        price:999,
    },
    {
        course:"Java",
        price:2999,
    },
    {
        course:"Andriod Development",
        price:5999,
    },
]

const priceToPay = course.reduce((acc,course)=> acc + course.price,0)
console.log(priceToPay)
