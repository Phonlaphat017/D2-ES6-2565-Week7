class Parent{
    show(){
        console.log("Parent class")
    }
    show2(){
        console.log("overriding")
    }
}

class Child extends Parent{
    show(){
        super.show()
        super.show2()
        console.log("Child class")
    }
}

let obj = new Child()
obj.show()