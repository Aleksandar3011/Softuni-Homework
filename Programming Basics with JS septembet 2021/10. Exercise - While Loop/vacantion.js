function solve(input) {
    let priceOfExcursion = Number(input[0]);
    let money = Number(input[1]);
    let days = 0;
    let spendDays = 0;
    let index = 2;

    while (money <= priceOfExcursion) {
        days++;
        let action = input[index];
        index++
        let currentMoney = Number(input[index]);
        index++;

        if (action === "spend") {
            spendDays++;
            money -= currentMoney;
            if (money < 0) {
                money = 0;
            }
        } else if (action === "save") {
            spendDays = 0;
            money += currentMoney;
        }

        if (money >= priceOfExcursion) {
            console.log(`You saved the money for ${days} days.`);
            break;
        }

        if (spendDays === 5) {
            console.log('You can\'t save the money.');
            console.log(spendDays);
            break;
        }


    }
}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
