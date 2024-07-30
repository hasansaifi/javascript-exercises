const palindromes = function (string) {
    string = string.toLowerCase();
    string = string.replace(/[^a-zA-Z0-9 ]/g, "")
    string = string.replace(/\s/g, "")
    const reversedString = string.split("").reduce((acc, char) => char + acc, "");
    console.log(reversedString);
    if(string == reversedString){
        return true;
    }else{
        return false;
    }
};


// Do not edit below this line
module.exports = palindromes;
