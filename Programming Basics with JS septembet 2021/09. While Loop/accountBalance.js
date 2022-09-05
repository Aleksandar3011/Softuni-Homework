function accountBalance(input) {

    let index = 0;
    let incMoney = input[index];
    let totalSum = 0;
    while(incMoney !== "NoMoreMoney"){
        incMoney = Number(input[index]);
        if(incMoney < 0){
            console.log(`Invalid operation!`);
            break;
        }
        totalSum += incMoney;
        console.log(`Increase: ${incMoney.toFixed(2)}`);
        index++;
        incMoney = input[index];
        
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);

}

accountBalance(["120",
"45.55",
"-150"])

