/* take an input array & target show index in array
Input: nums = [2,7,11,15], target = 9
Output: [0,1] */

let nums = [2,7,5,11,15,1];
let target = 6 ;
const output = (arr , tar) =>{
    let arr2 = [] ;
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i+1 ; j<arr.length ; j++){
            if(arr[i] + arr[j] == tar){
                arr2.push(i , j);
            }
        }
    }
    return arr2 ;
}

console.log(output(nums , target)) ;