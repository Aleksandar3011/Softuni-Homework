function towns(arr){

    let myObj = {

    };

    for(let i = 0; i < arr.length; i++){
        let currArr = [];
        currArr.push(arr[i]);
        let splitedArr = currArr.shift().split(` | `);
            myObj.town = splitedArr[0];
            myObj.latitude = Number(splitedArr[1]).toFixed(2);
            myObj.longitude = Number(splitedArr[2]).toFixed(2);

        console.log(myObj);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);