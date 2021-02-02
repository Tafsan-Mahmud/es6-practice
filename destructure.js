const person ={names: 'dfa', age:23 , job: 'coding' , phone : 5412311};

const{job , phone} = person ;
console.log(job , phone);



const friends = ['sakib', 'makib' , 'abdul', 'malek' ];
const [ first ,...second ] = friends;
console.log(first ,second);


const complexObject = {
    name:'abul',
    info: {
        address: ' banani hotel',
        leadar: 'moshiour'
    }
}
const {leadar} = complexObject.info;
console.log(leadar);