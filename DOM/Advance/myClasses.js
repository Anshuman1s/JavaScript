class User{
    constructor(username,email,password){
        this.username = username;
        this.email=email;
        this.password=password;

    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User("Chai","chai@345","6356")
console.log(chai.encryptPassword())
console.log(chai.changeUsername())