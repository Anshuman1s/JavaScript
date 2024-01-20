class User{
    constructor(username){
        this.username=username;

    }
    logMe(){
        console.log(`username ${this.username}`)
    }
    static createId(){
        return `123`
    }
}
const anshuman = new User("Anshuman")
console.log(anshuman.createId());