
const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);


//Arrow function with loop
const printProfileData  = profileDataArr => {

    // This...
    for (let i = 0; i < profileDataArr.length; i ++) {
        console.log(profileDataArr[i]);
    }

    console.log('================');

    // Is the same as this... 
    profileDataArr.forEach((profileItem) => {
        console.log(profileItem);
    });

    //And, that last one could also be written this way: 
    // profileDataArr.forEach(profileItem => console.log(profileItem));


};

printProfileData(profileDataArgs);