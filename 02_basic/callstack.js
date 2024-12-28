function one(){
    console.log(`one`);
    two()
    }
    function two(){
        console.log(`Two`);
        three()
    }
    function three(){
        console.log(`three`);
    }
   one();
   two();
   three();