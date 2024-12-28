// Falsy Values

// false, 0, -0, BigInt 0n,"", null, undefined,NaN

// Truthy Values

// "0",'false'," ",[],{}, function(){}

const userEmail = []
if(userEmail){
    // console.log("got user email");
}
else{
    // console.log("Don't have user email");
}


// Nullish Coalescing Operator(??): null ,undefined
// let val1;
// val1 = 5??10
// // val1 = null ?? 10
// //  val1 = undefined ?? 15

// val1 = null ?? 10 ?? 20

// console.log(val1);



// Terniary Operator syntax

// condition ? true : false

const iceTeaPrice = 120
iceTeaPrice <=80 ? console.log("less than 80"):console.log("more than 80")


