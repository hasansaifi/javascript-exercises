const fibonacci = function(num) {
    if (num < 0){
        return "OOPS"
    }
    
    let i = parseInt(num);
    let fabonacci = [0,1];
    for(i;i >= 0; i--){
        fabonacci.push(fabonacci[fabonacci.length - 2] + fabonacci[fabonacci.length - 1]);
    }

    console.log(fabonacci[num]);
    return(fabonacci[num]);
};

// Do not edit below this line
module.exports = fibonacci;
