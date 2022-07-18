class Student{
    constructor(name,age,rno){
        this.n = name
        this.age = age
        this.rno = rno
    }
    std(){
        console.log(this.n + this.age)
    }

    set rollno(newRoll){
        this.rno = newRoll
        
    }
}

let std1 = new Student("Mark",20,101)
console.log(std1.n)
std1.std()