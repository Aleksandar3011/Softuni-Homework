function shopping(input) {
    let budget = Number(input[0]);
    let VGA = Number(input[1]);
    let CPU = Number(input[2]);
    let RAM = Number(input[3]);
    
    let sumVGA = VGA * 250;
    let sumCPU = CPU * (sumVGA * 0.35);
    let sumRAM = RAM * (sumVGA * 0.1);

    let totalSum = sumVGA + sumCPU + sumRAM;

    if(VGA > CPU){
        totalSum = totalSum - (totalSum * 0.15);
    }

    if(budget >= totalSum){
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
    }else {
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`);
    }

    
}
shopping
(["900",
"2",
"1",
"3"])




