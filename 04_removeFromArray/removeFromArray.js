const removeFromArray = function(...theArgs) {
    //Storing exact value of received array to manipulate it
    let initArray = theArgs;
    //To remove initial array from argument
    let array = initArray.shift();
    let i = initArray.length;

    //Main loop to remove requested items
    for (const arg of theArgs) {
        i--;
        let removeVal = initArray[i];
        console.log(removeVal);

        let rmIndex = array.indexOf(removeVal);

        //To check if an item occured more than once
        const itemCounter = (value, index) => {
            return value.filter((x) => x == index).length;
        };
        let occurance = itemCounter(array, removeVal);
       
        //To check if items are of same type.
        if(typeof initArray[i] === typeof array[i]){
            //Loop to remove items that occured more than once. Also support single items.
            for(occurance; occurance > 0; occurance--){
            array.splice(rmIndex, 1)
        }
        }
        
          
    }

    
    return array;
}; 

//console.log("Sent Array: " + removeFromArray([1, 2, 3], "1", 3));
// Do not edit below this line
module.exports = removeFromArray;