const array = [1,2,3,4,5,6,7,8,9,10];

const number = array.filter((num)=> num>5)
console.log(number)
/*
const ret = array.filter((num)=>{
    return num<5;
})
console.log(ret);
const ret=[];

array.forEach((num)=>{
    if(num>4){
        ret.push(num);
    }
})
console.log(ret)
*/
//if we have to use curly brackets we must have to add return keyword other wise it will return only square brackets

