const reverseString = function(string) {
    let str = string;
    let arr = [...str];
    let i = arr.length;
    let rStr = "";

    for(i; i===0, i--;){
        rStr += str[i];
    }

    return rStr;
 
};

// Do not edit below this line
module.exports = reverseString;
