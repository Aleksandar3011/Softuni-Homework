function rounding(num, preciosion){
    if(preciosion > 15){
        preciosion = 15
    }

    num = num.toFixed(preciosion)
    console.log(parseFloat(num));
}
rounding(10.5,3)