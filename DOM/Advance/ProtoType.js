let myName= "Anshuman"
// console.log(myName.length)


let MyHeros =["Thor","SpiderMan"]

let heroPower={
    Thor:"hammer",
    spiderMan:"sling",

    getSpiderPower:function(){
        console.log('SpiderPower is ${this.spiderman')
    }
}

let name = "Anshuman           ";

String.prototype.trueLength = function(){
    // console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)
}
name.trueLength()