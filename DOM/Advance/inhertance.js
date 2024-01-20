class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Usename is ${this.usernme}`)
    }
}
class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}
const chai = new Teacher("chai","chai@134","678")
console.log(chai)
chai.addCourse()

const masalaChai = new user("Masalachai")
masalaChai.logMe()
