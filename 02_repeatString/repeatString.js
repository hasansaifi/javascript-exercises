const repeatString = function (string, repeatCount) {
    let finalString = "";
    let i = repeatCount;

    if (i >= 0) {
        for (i; i === 0, i--;) {
            finalString += string;
        }
    } else { finalString = "ERROR" }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString; 
