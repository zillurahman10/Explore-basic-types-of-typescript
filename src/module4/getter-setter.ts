// class BankAccount{
//     public readonly id: number;
//     public name: string;
//     private _balance: number;

//     constructor(id:number, name:string, balance:number){
//         this.name = name;
//         this.id = id;
//         this._balance = balance;
//     }
//     // getter
//     get balance():number{
//         return this._balance;
//     }
//     // setter
//     set deposit(amount:number){
//         this._balance = this._balance + amount;
//     }
//     // addDeposit(amount:number){
//     //     this._balance = this._balance + amount;
//     // }
//     // getBalance(){
//     //     return this._balance
//     // }
// }



// class StudentAccount extends BankAccount{
//     // constructor(id:number, name:string, balance:number){
//     //     super(id, name, balance);
//     // }
// }

// const myAccount = new BankAccount(24654, 'Zillur Rahman', 12300)
// // console.log(myAccount);
// console.log(myAccount.balance);
// myAccount.deposit = 500
// console.log(myAccount.balance);

