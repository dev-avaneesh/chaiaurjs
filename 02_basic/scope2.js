// nested scope

function one(){
    const username = "Avaneesh"

    function two(){
        const website ="youtube"
        console.log(username);
       }
    // console.log(website);
    two()
}
//one()