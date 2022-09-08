function newHouse(input) {
    
    let typeFlowers = input[0];
    let countFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    

    switch(typeFlowers){
        case "Roses": 
        price = countFlowers * 5.00;
        if(countFlowers > 80){
            price = price - (price * 0.10);
        }
            break;
        case "Dahlias": 
        price = countFlowers * 3.80;
        if(countFlowers > 90){
            price = price - (price * 0.15);
        }
            break;
        case "Tulips": 
        price = countFlowers * 2.80;
        if(countFlowers > 80){
            price = price - (price * 0.15);
        }
        break;
        case "Narcissus":
            price = countFlowers * 3.00;
            if(countFlowers < 120){
                price = price + (price * 0.15);
            }
        break;
        case "Gladiolus": 
        price = countFlowers * 2.50;
        if(countFlowers < 80){
            price = price + (price * 0.20);
        }
        break;
            
    }
        
        if(budget >= price){
            console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlowers} and ${(budget - price).toFixed(2)} leva left.`);
        }else{
            console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
        }
}

newHouse(["Tulips",
"88",
"260"])

