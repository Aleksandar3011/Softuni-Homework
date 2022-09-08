function solve(startingNum, ...commands){
    startingNum = Number(startingNum)
    for(let el of commands){
        if(el == `chop`){
            startingNum /= 2;
            console.log(startingNum);

        }else if(el == `dice`){
            startingNum = Math.sqrt(startingNum);
            console.log(startingNum);

        }else if(el == `spice`){
            startingNum += 1;
            console.log(startingNum);

        }else if(el == `bake`){
            startingNum *= 3;
            console.log(startingNum);
            
        }else if(el == `fillet`){
            startingNum -= startingNum * 0.2;
            console.log(startingNum);
        }
    }
}
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');