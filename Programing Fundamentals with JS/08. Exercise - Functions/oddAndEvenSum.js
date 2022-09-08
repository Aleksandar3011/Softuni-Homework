function oddAndEven(num){
    let numAsString = num.toString();
    numAsString = numAsString.split(``);
    
    let even = 0;
    let odd = 0;

    for(let digit of numAsString){
        if(digit % 2 == 0){
            even += Number(digit)
        }else{
            odd += Number(digit)
        }
    }

    console.log(`Odd sum = ${odd}, Even sum = ${even}`);

}

oddAndEven(1000435);