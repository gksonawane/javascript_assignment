// remove a given character from String eg. maharastra and want to remove character a from that string

const removeChar = (str , char) =>{
    let finalStr = "" ;
    for(let i = 0 ; i<str.length ; i++){
        if(str[i] !== char){
            finalStr += str[i];
        }
    }
    return finalStr ; 
}

let char = "a";
console.log(removeChar("Maharashtra" , char)) ;