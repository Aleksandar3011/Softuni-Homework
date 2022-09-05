function toyShop(input) {
    let vacantion = Number(input[0]);
    let numPuzel = Number(input[1]);
    let numDolls = Number(input[2]);
    let numBears = Number(input[3]);
    let numMinions = Number(input[4]);
    let numTrucks = Number(input[5]);

    let totalNum = numPuzel + numDolls + numBears + numMinions + numTrucks;
    let totalSum = (numPuzel * 2.60) + (numDolls * 3) + (numBears * 4.10) + (numMinions * 8.20) + (numTrucks * 2);

    if(totalNum >= 50){
        totalSum = totalSum - (0.25 * totalSum);
        totalSum = totalSum - (0.1 * totalSum);

    }else{
        totalSum = totalSum - (0.1 * totalSum);
    }

    if(totalSum >= vacantion){
    console.log(`Yes! ${(totalSum - vacantion).toFixed(2)} lv left.`);
    }else{
        console.log(`Not enough money! ${(vacantion - totalSum).toFixed(2)} lv needed.`);
    }


}

toyShop(["40.8",
"2",
"2",
"3",
"5",
"1"])


