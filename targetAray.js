/* take an input array & target show index in array
Input: nums = [2,7,11,15], target = 9
Output: [0,1] */

let nums = [2 , 7 , 11 , 15];
let target = 9 ;
const output = (arr , tar) =>{
    let arr2 = [] ;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] + arr[i+1] == tar){
            arr2.push(i , (i+1));
        }
    }
    return arr2 ;
}

console.log(output(nums , target)) ;