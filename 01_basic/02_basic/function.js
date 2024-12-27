function sayMyName(){
    console.log("A");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("E");
    console.log("E");
    console.log("S");
    console.log("H");
    
}
// sayMyName();

// add two numbers using function

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

function addTwoNumbers(num1,num2){
    // let result = num1+num2
    // return result
    return num1+num2
     }

 const result = addTwoNumbers(3,4)
//  console.log("result:",result);



function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Avaneesh"));

// console.log(loginUserMessage())


// Multiple values in function

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500))

const user = {
    username:"Avaneesh",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)


const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));