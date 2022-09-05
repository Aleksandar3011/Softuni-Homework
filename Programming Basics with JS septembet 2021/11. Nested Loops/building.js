function buinlding(input) {

    let floor = Number(input[0]);
    let rooms = Number(input[1]);

    for(let f = floor; f > 0; f--){
        let result = `` ;
        for(let r = 0; r < rooms; r++){
            if(f === floor){
                result +=`L${f}${r} ` ;
                continue;
            }
            if(f % 2 === 0){
                result += `O${f}${r} ` ;
            }else if(f % 2 === 1){
                result += `A${f}${r} ` ;
            }

        }
        console.log(result);
        result = `` ;
    }

}
buinlding(["9", "5"])