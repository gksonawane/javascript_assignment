// to find maximum difference betwee an array elements

let arr = [33,55,66,88,33,22] ;

const maxDifference = (arr) =>{
    let min = arr[0] ;
    let max = 0 ;

    for(let i = 0 ; i<arr.length ;i++){
        if(arr[i] < min){
            min = arr[i];
        }
        else{
            const diff = arr[i] - min ;
            if(diff > max){
                max = diff ;
            }
        }
    }
    return max ; 
}

console.log("Max difference between the elements of an array is : " , maxDifference(arr));