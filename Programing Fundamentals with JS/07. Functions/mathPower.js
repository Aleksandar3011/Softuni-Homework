function mathPower(num, degree){
    let res = 1;

    for(let i = 0; i < degree; i++){
        res = num * res;
    }
    console.log(res);

}
mathPower(2, 8);