//  let any string "avdfddfsdsds" and output showing like that { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }

let str = "avdfddfsdsds" ;

const charCount = (string) => {
    let countChar = {} ;

    for(let i = 0 ; i<string.length ; i++){
        let char = string[i];
        if(charCount[char]){
            charCount[char]++;
        }
        else{
            charCount[char] = 1; 
        }
    }
    return charCount ;
}

console.log(charCount(str));