function grade(num){

    let desc = ``;

    if(num < 3.00){
        desc = `Fail (2)`
    }else if(num < 3.50){
        desc = `Poor (${num.toFixed(2)})`
    }else if(num < 4.50){
        desc = `Good (${num.toFixed(2)})`
    }else if(num < 5.50){
        desc = `Very good (${num.toFixed(2)})`
    }else if(num >= 5.50){
        desc = `Excellent (${num.toFixed(2)})`
    }
    console.log(desc);
}

grade(2.99);
grade(3.33);
grade(4.50);