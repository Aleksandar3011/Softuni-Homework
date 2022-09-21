function invalidNumber(input) {
    
    let num = Number(input[0]);

    if(num === 0){
        console.log();
    }else if(num < 100 || num > 200){
        console.log("invalid");
    }else{
        console.log();
    }
}

invalidNumber(["0"])