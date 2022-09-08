function gladiatorExpenses(lost, helmetP, swordP, shiedP, armorP){
    let totalSum = 0;
    let count = 0;
    if(lost >= 2){
        totalSum += helmetP
    }else if(lost >= 3){
        totalSum += swordP + shiedP;
    }
}
gladiatorExpenses(7,2,3,4,5);