function integerAndFloat(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum;
    let sumAsString = String(sum);
    let type = ``;

    for (let i = 0; i < sumAsString; i++) {
        if (sumAsString[i] == `.`) {
            type = `Float`
            console.log(`${sum} - ${type}`);
        }
    }

    if (type != `Float`) {
        type = `Integer`
        console.log(`${sum} - ${type}`);
    }



}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);
