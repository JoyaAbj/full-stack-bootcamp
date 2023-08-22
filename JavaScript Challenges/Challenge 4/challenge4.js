//step 1
let fiveNumbers = [4, 9, 19, 22, 29];
console.log (fiveNumbers);
const personalInfo = {
    fname: "Joya",
    age: 26,
    height: "152",
    locations: "Jouret el Ballout",
    nationality: "Lebanese",
};
console.log("I am " + personalInfo.name);

//step 2
let nextThreeNumbers = [2, 11, 97];
const allnumbers = [...fiveNumbers, ...nextThreeNumbers];
console.log (allnumbers);

const additionalInfo = {
    hobby: "reading",
    education: "full stack developer",
};
const fullInfo = {
    ...personalInfo,
    ...additionalInfo,
};
fullInfo.sort
console.log (fullInfo);

//step 3
const [firstNum,secondNum,thirdNum] = fiveNumbers;
console.log (firstNum, secondNum,thirdNum);

const {fname, nationality, locations} = personalInfo;
console.log (fname);
console.log (nationality);
console.log (locations);




