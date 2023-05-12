class Person{
    takeNap():void{
        console.log('I am sleeping 8 hours per day');
    }
}

class Student extends Person{
    takeNap(): void {
        console.log('I am sleeping 10 hours per day')
    }
}

class Developer extends Person{
    takeNap(): void {
        console.log('I am sleeping 5 hours per day')
    }
}

function getNap(param: Person){
    param.takeNap()
}

const person1 = new Person()
const person2 = new Student()
const person3 = new Developer()
getNap(person1)
getNap(person2)
getNap(person3)