//** most useful topic threedots(...) */
// modeul --> 22-6 Spread operator, concatenate multiple arrays, array max


const age = [12, 24, 34, 44, 63,  5, 33, 76,];
const age2 = [44, 63, 5, 33, 23, 5, 33, 76,];
const age3 = [12, 63, 5, 33, 23, 5, 33, 76,];

//old mathod 
// const allAges = age.concat(age2).concat([100]).concat(age3);
const allAges = [...age, ...age2, ...age3, ...[880000] ];

// console.log(allAges);

// const business = 500;
// const menester = 400;
// const sochib = 100;

// jkhn alada alada value thake tkhn 
// const maximum = Math.max(business , menester , sochib);
// console.log(maximum);


// jkhn akta array thake 
const takapoisa = [ 500 ,800 , 2430 , 400 , 100];
const maximum = Math.max(...takapoisa);
console.log(maximum);

