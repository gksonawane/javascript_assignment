// printing fibonacci series

function fibonacciSeries(num) {
    if(num == 0 || num == 1){
        return num;
    }
    let seq = [0,1] ;

    while(seq.length < num){
        let nxtNum = seq[seq.length - 1] + seq[seq.length - 2] ;
        seq.push(nxtNum) ;
    }
    return seq;
}

let output = fibonacciSeries(2) ;
console.log(output);