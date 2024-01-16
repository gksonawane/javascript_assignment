// to find longest word in a string 

const longestWord = (str) => {
    const words = str.split(' ') ;
    let long = '' ;

    for(let i = 0 ; i < words.length ; i++){
        if(words[i].length > long.length){
            long = words[i];
        }
    }
    return long ;
}

let output = longestWord("hii guys i am jalgaon Maharashtra") ;

console.log("Longest word in a string is :",output);