//khub e mojar and usefull topic--> (class)
// modeul--> 22-7 Class, constructor, create object from class 

class Student{
    constructor(sId , SName){
        this.id = sId ;
        this.name = SName;
        this.institute = 'PTSC';
    }
     
}

const student1 =  new Student(133481 , 'mahi');
const student2 =  new Student(186610 , 'babul');
const student3 =  new Student(327016 , 'salam');
console.log(student1 , student2 , student3);
