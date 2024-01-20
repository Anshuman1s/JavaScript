
const user = {
    username:"Anshuman",
    login:8,
    signedIn:7,
    getUserDetails:function(){
        console.log("Get User Deatils")
        // console.log(`UserName :${this.username}`)
        // console.log(this);
    }
}
console.log(user.username)
console.log(user.getUserDetails());
// console.log(this)

// const promiseOne = new Promise()
// const date = new Date()

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    //  
}
const userOne =  new User("anshuman",12,true);
const userTwo =  new User("shukla",13,false);
console.log(userOne)
console.log(userOne)