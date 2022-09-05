function hose(input) {

    let cakeSize = Number(input[0]) * Number(input[1]);
    let index = 2;
    let takePices = input[index];
    
    while(takePices !== "STOP"){
        if(cakeSize < 0){
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            break;    
        }
        takePices = Number(input[index]);
        index++;
        cakeSize -= takePices;
        takePices = input[index];
        
    }

    if(takePices === "STOP"){
        if(cakeSize > 0){
            console.log(`${cakeSize} pieces are left.`);
           
        }else if(cakeSize < 0){
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            
        }
    }
    

}
hose(["10",
"2",
"2",
"4",
"6",
"STOP"])





