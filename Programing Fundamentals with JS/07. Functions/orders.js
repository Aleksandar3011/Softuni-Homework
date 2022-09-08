function orders(product, quantity){
    
    function sum(){
        let price = 0;
        if(product == `coffee`){
            price = quantity * 1.50;
        }else if(product == `water`){
            price = quantity * 1;
        }else if(product == `coke`){
            price = quantity * 1.40;
        }else if(product == `snacks`){
            price = quantity * 2.00;
        }
        return price;
    }

    console.log(sum(product, quantity).toFixed(2));
}
orders(`water`, 2);
