/*Increment the large integer by one and return the resulting array of digits
input [1,2,3] & output will be 124 show result like [1,2,4]*/

let num = [1, 2, 3];
const incrementLargeInteger = (arr) => {
    let max = arr[0] ;
    let index = 0 ;
    for(let i = 0 ; i<arr.length ; i++){
        for(let j = 0; j<arr.length ; j++){
            if(arr[i] > arr[j]){
                max = arr[i] ;
                index = i ;
            }
        }
    }
    max += 1
    arr[index] = max ;
    
    return arr;
}

console.log(incrementLargeInteger(num));




  