// Create a function that takes the age in years and returns the age in days.

const ageIndays = (yrs) => {
    let oneYear = 365 ;
    
    if(yrs === 0){
        return yrs ;
    }
    
    return yrs * oneYear ;
}

console.log("Your age in days are :",ageIndays(0));