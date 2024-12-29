// for of method

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings){
    console.log(`Each char is ${greet}`);
    
}

// for of  (only unique value print krta hai duplicate value is not allowed)

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map);

for(const [key,value] of map){
    // console.log(key, ':-',value);
}

// Note- object me for in method ka use karke hi value ko find kiya ja sakta hai
const myObject ={
    game1: 'NFS',
    game2: 'Spiderman',
}
for (const key in myObject) {
    
    //   console.log(myObject[key]);  
    // console.log(`${key}and ${myObject[key]}`);
        
    }


  const programming = ["js","rb","py","java","cpp"]
  for (const key in programming) {
        // console.log(programming[key]);
  }  


  // for Each method

  const coding = ["js","ruby","java","python","cpp"]
//   coding.forEach(function (val){
//     console.log(val);
//   })

// using arrow function

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})


const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"py"   
    },
    {
        languageName:"ruby",
        languageFileName:"rb" 
    },
]
myCoding.forEach((item)=>{
        console.log(item.languageName)
})


