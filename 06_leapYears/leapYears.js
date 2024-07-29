const leapYears = function(year) {
    let isLeapYear;

    // If a year is divisible by 4 or 400, than it's a leap year.
    if (year % 4 === 0 || year % 400 === 0){
        // if a year is divisible by 100 and not divisible by 400 it's not a leap year.
        if (year % 100 === 0 && year % 400 != 0){
            isLeapYear = false;
            
        }else // if not it's a leap year
        { isLeapYear = true;}
        
    //If not that it's not a leap year
    }else {
        isLeapYear = false
    }
    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
