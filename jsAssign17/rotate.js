// Write a function to rotate the elements of an array to the right by a specified number of steps.

const rotateArray = (arr, steps) => {

    const n = arr.length;
    for (let i = 0; i < steps; i++) {
        arr.unshift(arr.pop()); 
    }
    
    return arr;
    
}

let arr = [1, 2, 3, 4];
let rounds = 2;
console.log(rotateArray(arr, rounds));