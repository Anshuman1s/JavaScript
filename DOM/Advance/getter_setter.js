class User {
    construct(email,password){
        this.password = password;
        this.email = email;
    }
    get username(){
        return `${this._password}hitesh`;
    }
    set username(value){
        this._password = value.toUpperCase()
    }
}

const anshuman = new User("anshuman@809","abc");
console.log(anshuman.password)