// to count the numbers of vowels in a string

const countVowels = (str) => {
    let cnt = 0 ;
    const vowels = ["a" , "e" , "i" , "o" , "u" , "s"]  ;

    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            cnt++ ;
        }
    }
    return cnt;
}
let str = "how are you Gaurav" ;
console.log("Number of vowels in a string are :",countVowels(str));

