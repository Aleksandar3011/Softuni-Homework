function smartLili(input){
    let years = Number(input[0]);
    let purchase = Number(input[1]);
    let dolls = Number(input[2]);
    let sum = 0;
    let money = 0;


    for(let i = 1; i <= years; i++){
        if(i % 2 === 0){
            money+=10;
            sum+= money - 1;
            
            
        }else{
            sum += dolls;
        }
        
    }
    if(sum >= purchase){
        console.log(`Yes! ${(sum - purchase).toFixed(2)}`);
    }else{
        console.log(`No! ${(purchase - sum).toFixed(2)}`);
    }    

}

smartLili(["21",
"1570.98",
"3"])

