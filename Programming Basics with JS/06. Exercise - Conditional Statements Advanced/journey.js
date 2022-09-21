function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let country = "";
    let place = "";
    let summerDiscount= 0;
    let winterDiscount = 0;
    let diss = 0;

    if(budget <= 100 && season === "summer"){
        summerDiscount = budget - (budget * 0.30);
        budget = (budget - summerDiscount).toFixed(2);
        place = "Camp";
        country = "Bulgaria"
    }else if(budget <= 100 && season === "winter"){
        winterDiscount = budget - (budget * 0.70);
        budget = (budget - winterDiscount).toFixed(2);
        place = "Hotel";
        country = "Bulgaria"
    }else if(budget <= 1000 && season === "summer"){
        summerDiscount = budget - (budget * 0.40);
        budget = (budget - summerDiscount).toFixed(2);
        place = "Camp";
        country = "Balkans"
    }else if(budget <= 1000 && season === "winter"){
        winterDiscount = budget - (budget * 0.80);
        budget = (budget - winterDiscount).toFixed(2);
        place = "Hotel";
        country = "Balkans"
    }else{
        diss = budget - (budget * 0.90);
        budget = budget - diss;
        place = "Hotel"
        country = "Europe"
    }

    let diff = (Math.abs(budget)).toFixed(2);

    console.log(`Somewhere in ${country}`);
    console.log(`${place} - ${diff}`);
    


}

journey(["1500", "summer"])