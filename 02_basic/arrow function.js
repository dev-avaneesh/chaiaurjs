// this keyword current context ko refer krta hai

const user ={
    username:"Avaneesh",
    price:999,

    welcomeMessage:function(){
        // console.log(`${this.username},welcome to website`);
    }
}
// console.log(this);
// user.welcomeMessage();
// user.username="sam"
// user.welcomeMessage()

//  function chai(){
//      let username = "Avaneesh"
//      console.log (this.username);
// }
//  chai();


const chai = () =>{
    let username = "Avaneesh"
    console.log(this.username);
    console.log(this);
}
chai();

// syntax of arrow function const add=() => {}

    // const addTwo = (num1,num2)=>{
    //     return num1+num2
    // }
    //  console.log(addTwo(3,4));


    // in arrow function implicit return isme curlie breckets and return keyword ko hta diya jata hai

// const addTwo = (num1,num2)=>num1+num2
// console.log(addTwo(2,4));

// Note-object return krane ke liye curlie brackets ka use kiya jata hai

const addTwo=(num1,num2)=>({username:"Avaneesh"})
console.log(addTwo(3,4));

// Note-this keyword kam krta hai object me function me kam nhi krta hai function me value undefined ya null aata hai