const coding = ["Java","js","CPP","Python"]

// coding.forEach(function (val)  {
//     console.log(val)
// });

coding.forEach((print )=>{
    // console.log(print);
})

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})

const array = [
    {
        language:"Java",
        languageFileName:"java"
    },
    {
        language:"C++",
        languageFileName:"CPP"
    },
    {
        language:"Python",
        languageFileName:"py"
    }
]
array.forEach((item)=>{
    console.log(item.languageFileName)
})

//For each will not return any value 
