//step 1
let age = 26
if (age >= 20) {
    console.log ('You can enter this room.');
} else {
    console.log ("You can't enter this room.");
}
const expression1 = 5 > 3;
const expression2 = 10 === '10';
const expression3 = true && false;
const expression4 = !expression3;

console.log ( expression1, expression2, expression3, expression4)

//step 2
const age1 = 25;
const hasDriverLicense = true;
const hasCar = false;
let canRentCar = false;
let canDrive = false;
let needDriver = false;

if (age1 >= 18 && hasDriverLicense) {
    canDrive = true;
  }
  console.log(canDrive);

  if (age1 >= 22 && hasDriverLicense && !hasCar) {
    canRentCar = true;
  }
  console.log(canRentCar);

  if (age1 <18 && !hasDriverLicense && !hasCar) {
    needDriver = true;
  }
  console.log (!needDriver);

  //step 3
  let role = "admin";
  switch(role) {
    case "admin":
        console.log ("You have read and write access for the data");
     break;
    case "user":
        console.log ("You have only read access for the data");
    break;
    case "guest":
        console.log ("You have no access for the data");
    break;
    default:
        console.log ("User role is not recoginized");
    break;
  }