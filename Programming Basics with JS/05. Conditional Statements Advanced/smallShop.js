function smallShop(input){

    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let sum = 0;

    if(city === "Sofia" && product === "coffee"){
        sum = 0.5 * quantity
    }else if(city === "Sofia" && product === "water"){
        sum = 0.8 * quantity
    }else if(city === "Sofia" && product === "beer"){
        sum = 1.20 * quantity
    }else if(city === "Sofia" && product === "sweets"){
        sum = 1.45 * quantity
    }else if(city === "Sofia" && product === "peanuts"){
        sum = 1.60 * quantity
    }else if(city === "Plovdiv" && product === "coffee"){
        sum = 0.4 * quantity
    }else if(city === "Plovdiv" && product === "water"){
        sum = 0.7 * quantity
    }else if(city === "Plovdiv" && product === "beer"){
        sum = 1.15 * quantity
    }else if(city === "Plovdiv" && product === "sweets"){
        sum = 1.30 * quantity
    }else if(city === "Plovdiv" && product === "peanuts"){
        sum = 1.50 * quantity
    }else if(city === "Varna" && product === "coffee"){
        sum = 0.45 * quantity
    }else if(city === "Varna" && product === "water"){
        sum = 0.7 * quantity
    }else if(city === "Varna" && product === "beer"){
        sum = 1.10 * quantity
    }else if(city === "Varna" && product === "sweets"){
        sum = 1.35 * quantity
    }else if(city === "Varna" && product === "peanuts"){
        sum = 1.55 * quantity
    }
    console.log(sum);
    




}

smallShop(["coffee",
"Sofia",
"2"])
