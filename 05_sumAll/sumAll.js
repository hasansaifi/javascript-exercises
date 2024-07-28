const sumAll = function(numOne, numTwo) {
    let maxNum = Math.max(numOne, numTwo);
    let minNum = Math.min(numOne, numTwo);

    let i = maxNum;

    let sum = maxNum;
    
    for(i; minNum != i ; i--){
        sum = sum + (i -1);
        console.log(sum);

    }

    return sum;
};

//sumAll(23, 23444);
// Do not edit below this line
module.exports = sumAll;
