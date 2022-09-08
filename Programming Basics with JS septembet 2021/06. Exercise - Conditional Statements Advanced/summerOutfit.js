function summerOutfit(input) {

    let degrees = Number(input[0]);
    let weather = input[1];
    let outfit = "";
    let shoes = "";


    if(weather === "Morning" && degrees >= 10 && degrees <= 18){
        outfit = "Sweatshirt"
        shoes = "Sneakers"

    }else if(weather === "Morning" && degrees > 18 && degrees <= 24){
        outfit = "Shirt"
        shoes = "Moccasins"

    }else if(weather === "Evening" && degrees > 18 && degrees <= 24){
        outfit = "Shirt"
        shoes = "Moccasins"


    }else if(weather === "Morning" && degrees >= 25){
        outfit = "T-Shirt"
        shoes = "Sandals"

    }else if(weather === "Afternoon" && degrees >= 10 && degrees <= 18){
        outfit = "Shirt"
        shoes = "Moccasins"


    }else if(weather === "Evening" && degrees >= 10 && degrees <= 18){
        outfit = "Shirt"
        shoes = "Moccasins"


    }else if(weather === "Afternoon" && degrees > 18 && degrees <= 24){
        outfit = "T-Shirt"
        shoes = "Sandals"

    }else if(weather === "Afternoon" && degrees >= 25){
        outfit = "Swim Suit"
        shoes = "Barefoot"

    }else if(weather === "Evening" && degrees >= 25){
       outfit = "Shirt"
       shoes = "Moccasins"
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);

}

summerOutfit(["22",
"Afternoon"])

