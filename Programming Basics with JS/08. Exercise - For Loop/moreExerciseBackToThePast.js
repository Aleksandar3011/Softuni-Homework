function returnToThePast(input) {
    let money = Number(input[0]);
    let years = Number(input[1]);
    let ivancho = 17;
    let spentMoney = 0;
    let remainMoney = 0;
    

    for(let i = 1800; i <= years; i++){
        ivancho++;
        if(i % 2 === 0){
            spentMoney += 12000;
        }else{
            spentMoney += 12000 + ivancho * 50
        }
        
    }
    remainMoney = Math.abs(money - spentMoney);
    if(money >= spentMoney){
        console.log(`Yes! He will live a carefree life and will have ${remainMoney.toFixed(2)} dollars left.`);
    }else{
        console.log(`He will need ${remainMoney.toFixed(2)} dollars to survive.`);
    }
    
    
}

returnToThePast(["50000",
"1802"])
