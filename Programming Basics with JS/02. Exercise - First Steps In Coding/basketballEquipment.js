function basketBallEquipment(input) {
    let yearPrice = Number(input[0]);
    let shoes = yearPrice - (yearPrice * 0.4);
    let outfit = shoes - (shoes * 0.2);
    let ball = outfit / 4;
    let accessories = ball / 5;
    let totalSum = yearPrice + shoes + outfit + ball + accessories;
    
        console.log(totalSum);
}

basketBallEquipment(["365 "]);