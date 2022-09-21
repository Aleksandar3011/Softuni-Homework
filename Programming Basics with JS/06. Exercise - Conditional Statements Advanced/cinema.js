function cinema(input) {
    
    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let sum = 0;


    if(type === "Premiere"){
        sum = (c * r * 12).toFixed(2)
    }else if(type === "Normal"){
        sum = (c * r * 7.50).toFixed(2)
    }else{
        sum = (c * r * 5.00).toFixed(2)
    }

    console.log(`${sum} leva`);

}

cinema(["Discount",
"12",
"30"])

