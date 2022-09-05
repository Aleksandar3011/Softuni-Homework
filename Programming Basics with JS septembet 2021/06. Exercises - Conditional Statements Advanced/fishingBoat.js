function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    let seasonPrice = 0;

    switch (season) {
        case "Spring":
            seasonPrice = 3000;
            
            break;

        case "Summer":
        case "Autumn":
            seasonPrice = 4200;
            
             break;

        case "Winter":
            seasonPrice = 2600;
            
            break;

            
    }

    if(fishermen <= 6){
        seasonPrice = seasonPrice - (seasonPrice * 0.10);
    }else if(fishermen >= 7 && fishermen <= 11){
        seasonPrice = seasonPrice - (seasonPrice * 0.15);
    }else{
        seasonPrice = seasonPrice - (seasonPrice * 0.25);
    }

    if(fishermen % 2 === 0 && season !== "Autumn"){
        seasonPrice = seasonPrice - (seasonPrice * 0.05)
    }

    let diff = Math.abs(budget - seasonPrice)

    if(budget >= seasonPrice){
        console.log(`Yes! You have ${(diff).toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money! You need ${(diff).toFixed(2)} leva.`);
    }

}

fishingBoat(["2000",
"Winter",
"13"])








