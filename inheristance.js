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
let cat1 = new Cat("Somsri")
cat1.cshow()