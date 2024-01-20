//Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log("ISO: "+ myDate.toISOString())
// console.log("JSON: "+myDate.toJSON())
// console.log("Local:" +myDate.toLocaleDateString())
// console.log("LocalTime:"+myDate.toLocaleTimeString())

// let myCreatedDate = new Date(2023,0,14)
// let myCreatedDate = new Date("2023-01-13")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())

// let myTimeStamp = Date.now();
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime);
//  console.log(Math.floor(Date.now()/1000))

//  console.log(myCreatedDate.getDay())
//  console.log(myCreatedDate.getMonth())

myCreatedDate.toLocaleString('defalut',{
    weekday:"long",
    timeZone:""
})
 
