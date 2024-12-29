// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num)=>{  //if scope {} ka use hum krenge to return keyword likhna padega
//     return num > 4
// })

// const newNums = []
// myNums.forEach((num)=>{
//     if (num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);


// Map method

// const myNumbers = [1,2,3,4,5,6,7,8,9,10]
//  const newNumbers=myNumbers.map((num)=> num+10)
// console.log(newNumbers);

// chaining Method

const myNumbers = [1,2,3,4,5,6,7,8,9,10] 
const newNum = myNumbers.map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40)
//    console.log(newNum);
   
   // Reduce method

   const myNums = [1,2,3]
   const myTotal = myNums.reduce(function (acc,currval){
    return acc + currval
   },0)
//    console.log(myTotal);


const shoppingCart =[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    },
]
const priceToPay = shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(priceToPay);
