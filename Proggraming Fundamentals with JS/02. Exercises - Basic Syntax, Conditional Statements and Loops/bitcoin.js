function bitcoinMining(data) {
    let days = data.length;
    let leftMoney = 0;
    let isFlag = true;
    let firstBitcoin = 0;
    let bitcoins = 0;

    for (let i = 1; i <= days; i++) {
        let dailyMoney = data[i - 1] * 67.51;

        if (i % 3 === 0) {
            dailyMoney *= 0.7
        }

        if (isFlag) {
            if (dailyMoney >= 11949.16) {
                firstBitcoin = i;
                bitcoins++;
                dailyMoney -= 11949.16;
                isFlag = false;
            }
        }

        while (dailyMoney >= 11949.16) {
            dailyMoney -= 11949.16
            bitcoins++;
        }

        leftMoney += dailyMoney;
        dailyMoney = 0;
    }
    
    while (leftMoney >= 11949.16){
        leftMoney -= 11949.16
        bitcoins++;
    }

    console.log( `Bought bitcoins: ${bitcoins}`);
    if(firstBitcoin !== 0){
        console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
    }
    console.log(`Left money: ${leftMoney.toFixed(2)} lv.`);

}

bitcoinMining([100, 200, 300])
console.log(`==========`);
bitcoinMining([50, 100])