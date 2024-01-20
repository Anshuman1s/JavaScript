//fetch('https://anshumanshukla.com').then().catch().finally()

const promiseOne = new Promise((resolve,reject)=>{
    //Do an asynctask
    //DB calls,Cryptography,network
    setTimeout(function(){
        console.log("Async Task is complete");
        resolve()
    },1000)
})

//Consumption

promiseOne.then(()=>{
    console.log("Promise Consumed");
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task 2");
    },1000)
    resolve()
}).then(()=>{
    console.log("Async 2 Resolved");
})

const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Anshuman",email:"anshuman@co.in"})
    },1000)
})
//resolve parameter will become the paraMeter for then
PromiseThree.then(function(user){
    console.log(user)
})

//Promoise FOur

const PromiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"Anshuman",password:"123"})
        }else{
            reject('ERROR SomeThing Went Wrong')
        }
    },2000)
})

 PromiseFour.then((user)=>{
    console.log(user)
    return user,username
}).then((username)=>{
     console.log(username)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log('The promise is either Accepted or Reject')
})

//Promise Five

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({Langaugae:"JavaScript",File:'Js'})
        }else{
            reject('ERROR: Js file include')
        }
    },1000)
});
async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response)
    
   } catch (error) {
    console.log(error)
    
   }
}


// async function getAllUsers(){
//     try {
//         const response = await fetch('')
//     const data = response.json();
//     console.log(data)
//     } catch (error) {
//         console.log("E:" ,error)
        
//     }
// }
// getAllUsers()

fetch('https://api.github.com/users/Anshuman1s').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=> {
    console.log(error)
})


