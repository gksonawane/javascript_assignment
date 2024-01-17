// Write a function that takes an array and a chunk size as parameters and splits the array into smaller arrays of the specified size.

const smallArrays = (arr , size) => {
    
    let result = [] ;
    let n = arr.length ;

    let i = 0 ;
    if(size === 0){
        return "Invalid number" ;
    }
    while(i < n){
        let rep = arr.slice(i , i+size) ;
        result.push(rep) ;
        
        i += size ;
    }
    return result ; 
}

const arr = [1,2,3,4,5,6,7,8] ;
let size = 0 ;
console.log(smallArrays(arr , size));