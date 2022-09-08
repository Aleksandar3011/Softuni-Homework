function solve(year, month, day){
    if(day == 1){
        console.log(`${year}-${month - 1}-${day = 30}`);
    }else{
        console.log(`${year}-${month}-${day - 1}`);
    }
}

solve(2016, 10, 1);