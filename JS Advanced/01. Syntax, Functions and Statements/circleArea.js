function circleArea(radius){
    if(typeof radius == `number`){
        console.log((radius ** 2 * Math.PI).toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
    }
}

circleArea(5);
circleArea(`asd`);
circleArea(false);
