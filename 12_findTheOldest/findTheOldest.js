const findTheOldest = function(people){
    const date = new Date();
   

    const oldest = people.sort(function(a, b) {  
        if (!("yearOfDeath" in b)){
            b.yearOfDeath = date.getFullYear();
        }
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    });

    //console.table(oldest);
    return oldest[0];
    
};

// Do not edit below this line
module.exports = findTheOldest;
