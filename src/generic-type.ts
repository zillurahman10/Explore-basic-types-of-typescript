type GenericTuple<X, Y> = [X, Y]

const relation:GenericTuple<object, string> = [{
    name: 'Zillur',
    salary: 1000000000000
}, 
'Prothoma'
]

type GenericArray<T> = Array<T>


const rollNumber:GenericArray<number> = [12, 44, 4]
const rollNumber2:GenericArray<string> = ["12", "44", "4"]
const rollNumber3:GenericArray<boolean> = [true, false]

type NameAndRollNumber = {name: string, roll:number}

const userNameAndRollNumber: GenericArray<NameAndRollNumber> = [
    {
    name: 'Mr X',
    roll: 1
},
{
    name: 'Mr. Y', 
    roll: 2
}
]