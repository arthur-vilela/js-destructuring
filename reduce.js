// Summing an array of numbers:

// const nums = [0,1,2,3,4];
// let sum = nums.reduce((acc, curr) => {
//     console.log(
//         "Accumulation:", acc,
//         "Current:", curr,
//         "Total:", acc + curr,
//     )
//     return acc + curr;
// },0);

/**
 * The 2nd parameter ("0") is the initial value in the accumulation
 * It is good practice to always write this initial (acc) value to make it clearer
 * Each item in the array (curr) will be added to the accumulated (acc)
 * reaching a total, which is returned.
 */

// console.log(sum)

// It can also be written like this:

// let sumSimple = nums.reduce((acc,curr) => acc + curr, 0);
// console.log("Function simplified:", sumSimple)

// Testing for multiplication

// let mult = nums.reduce((acc, curr) => acc * curr, 1); // Changed initial value to 1, otherwise the result would always be 0
// console.log("All array values multiplied:", mult)

// Testing for more complex functions

// let complex = nums.reduce((acc, curr) => {
//     if(curr > 0){
//         return acc * curr;
//     } else {
//         return acc // By returning only the value for "acc", we effectively skip "curr", avoiding multiplying by zero
//     }
// }, 1)
// console.log("Multiplication w/o 0:", complex)







const teamMembers = [
    {
        name: 'Andrew',
        profession: 'Developer',
        yrsExperience: 5
    },
    {
        name: 'Ariel',
        profession: 'Developer',
        yrsExperience: 7
    },
    {
        name: 'Michael',
        profession: 'Designer',
        yrsExperience: 1
    },
    {
        name: 'Kelly',
        profession: 'Designer',
        yrsExperience: 3
    }
];

// Totaling a specific object property

let xpYears = teamMembers.reduce((acc, curr) => {
    curr = curr.yrsExperience;
    return acc + curr;
}, 0);
console.log(xpYears);
let xpYearsShort = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0)
console.log(xpYearsShort)

/*
* In the function below, acc starts as an empty object.
* "acc[key]" represent a key inside this object
* by stating acc[key] = some value, a key value pair will be added (key:some value)
*/

// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) { // Check if the curr.profession("[key]") is NOT("!") in the new object (acc)
        acc[key] = curr.yrsExperience; // Add new profession if it doesn't exist yet
    } else {
        acc[key] += curr.yrsExperience // Add years o XP if curr.profession is present
    }
    return acc
}, {}) // Acc starts as an empty object
console.log(experienceByProfession)