// there are two typs of memory uses in java script

// 1. stack memory (used for primitive data types)
// 2. heap memory  (used for non primitive data types)

let myYoutubename="Avaneeshsinghdotcom"
let anotherName=myYoutubename

anotherName="chaiaurcode"

console.log(myYoutubename)
console.log(anotherName)

let userOne={
    name:"Avaneesh@google.com",
    upi:"user@ybl",
}

let userTwo=userOne
userTwo.email="Avaneesh@google.com"

console.log(userOne.emaol);
console.log(userTwo.email);