const removeFromArray = function(...theArgs) {
    let initArray = theArgs;
    let array = initArray.shift();
    let i = initArray.length;
    
    for (const arg of theArgs) {
        i--;
        let remove = initArray[i];
        let rmIndex = array.indexOf(remove);
        array.splice(rmIndex, 1)
    }


    return array;
}; 

removeFromArray([1, 2, 3, 4], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;