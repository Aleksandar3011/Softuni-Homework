function godzilaVsKong(input) {
    let budget = Number(input[0]);
    let supernumerary = Number(input[1]);
    let clothes = Number(input[2]);

    let decor = 0.1 * budget;
    let sumClothes = supernumerary * clothes;
    


    if(supernumerary > 150){
        sumClothes = sumClothes - (0.1 * sumClothes);
    
    }

    let totalSum = decor + sumClothes;

    if(budget >= totalSum){
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - totalSum).toFixed(2)} leva left.`);

    }else{
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(totalSum - budget).toFixed(2)} leva more.`);
    }

}

godzilaVsKong(["20000",
"120",
"55.5"]);




