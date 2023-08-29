function delay(milliseconds) {
    return new  Promise(resolve => {
      setTimeout(() => {
        resolve(); 
      }, milliseconds);
    });
  }
  console.log("Start");
  delay(3000)  
    .then(() => {
      console.log("After delay"); 
    });
    