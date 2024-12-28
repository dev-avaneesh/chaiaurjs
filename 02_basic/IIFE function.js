// Immediately Invoked Function Expressions(IIFE)
 // global scope ke pollution se hone wale dikkat se htane ke liye IIFE ka use kiya jata hai
  

 // first paranthesis()ka use hum function ki definition likhne ke liye kiya jata hai
 // second paranthesis ka use hum execution ke liye krte hai 
  

(function chai(){
    console.log(`database connected`);
    })();

    // using arrow function

    ( (name) => {
        console.log(`database connected two ${name}`)
    })(`Avaneesh`);