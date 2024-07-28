const removeFromArray = function(...theArgs) {
    let initArray = theArgs;
    let array = initArray.shift();
    let i = initArray.length;

    
    for (const arg of array) {
        i--;
        let removeVal = initArray[i];

        let rmIndex = array.indexOf(removeVal);

        const itemCounter = (value, index) => {
            return value.filter((x) => x == index).length;
        };
        
        let occurance = itemCounter(array, removeVal);
       
        for(occurance; occurance > 0; occurance--){
            array.splice(rmIndex, 1)
        }
          
    }

    console.log(array);
    return array;
}; 

removeFromArray([1, 2, 2, 3], 2);
// Do not edit below this line
module.exports = removeFromArray;