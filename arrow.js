

// onek valo akta topic future a kaje debe 
//** video --> 22-5 Arrow function, multiple parameter, function body */


// aita old function mathod 
// function dubble(num){
//     return num*2;
// }
// let result = dubble(11);
// console.log(result);


// aitao old mathod
// const dubble2 = function(num){
//     return num *2 ;
// }
// let result2 = dubble2(21);
// console.log(result2);



//now single line  Arrow function
// const arrowFuction = num => num * 2;
// let result3 = arrowFuction(3);
// console.log(result3);


// //way-2
// const arrowFuction2 = (x , y) => x + y ;
// let result4 = arrowFuction2(3 ,12);
// console.log(result4);


// // and the functin without parameter
// const arrowFuction3 = () => 7 ;
// let result5 = arrowFuction3()
// console.log(result5);


//another way 
const doMath = (x , y) => {
    const sum = x + y ;
    const diff = x - y ;
    const result = sum * diff ;
    return result ;
}
let result6 = doMath(10 , 5);
console.log(result6);