// class Parent {
//     name: string;
//     age: number;
//     address: string;
    
//     constructor(name: string, age:number, address:string){
//         this.name = name;
//         this.age = age;
//         this.address = address
//     }

//     makeSleep(hours:number):string{
//         return `This ${this.name} will sleep for ${hours}`
//     }

// }


// class Student extends Parent{
//     constructor(name: string, age:number, address:string){
//         super(name, age, address)
//     }
// }

// const student1 = new Student('Rohan', 13, 'Bangladesh')

// class Teacher extends Parent{
//     designation:string;

//     constructor(name:string, age:number, address:string, desigantion:string){
//         super(name, age, address)
//         this.designation = desigantion;
//     }
//     takeClasses(nuberOfClass: number):string{
//         return `This ${this.name} will take ${nuberOfClass} classes`
//     }

// }

// const teacher1 = new Teacher('Kaka', 48, 'Switzer Land', 'Senior Teacher')