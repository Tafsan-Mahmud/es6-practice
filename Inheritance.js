//Interview quistion ace onek akhne inheritance niya beCareful......

class Parent{
    constructor(){
        this.featherName = 'solim uddin';
    }
}

class Child extends Parent{
    constructor(Name){
        super();
        this.name = Name;     
    } 
}

const bby =  new Child('mahi');
const bby2 =  new Child('babul');
// const student3 =  new Student(327016 , 'salam');
console.log(bby , bby2);