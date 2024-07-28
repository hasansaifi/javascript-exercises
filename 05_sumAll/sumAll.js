const sumAll = function(numOne, numTwo) {
    let maxNum = Math.max(numOne, numTwo);
    let sum = maxNum;

    if (numOne >= 0 && numTwo >= 0 && Number.isInteger(numOne) && Number.isInteger(numTwo)){
        
        let minNum = Math.min(numOne, numTwo);
        let i = maxNum;
        
        for(i; minNum != i ; i--){
            sum = sum + (i -1);
            //console.log(sum);
        }
    }else{sum = "ERROR"}
    

    return sum;
};

//sumAll(23, 23444);
// Do not edit below this line
module.exports = sumAll;
