function travelig(input) {

    let index = 0;
    let command = input[index];
    index++;
    
    while(command !== 'End'){
        let destination = command;
        let needPrice = Number(input[index])
        index++;
        let sum = 0
        while(needPrice > sum){
            let currentMoney = Number(input[index]);
            index++;
            sum += currentMoney
        }
        command = input[index];
        index++;
        console.log(`Going to ${destination}!`);
    }
}
travelig(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"])
