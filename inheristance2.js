//Single inheristance
class Annimal{ //Parent class
    constructor(cname){
        this.cn = cname
    }
}

class Cat extends Annimal{ //child class
    cshow(){
        console.log(this.cn)
    }
}

class BadyCat extends Cat{
    color(){
        console.log("Red hair")
    }
}

let bcat1 = new BadyCat("Somsr")
bcat1.color()
bcat1.cshow()