function pyramideOfNumbers(input) {

    let num = Number(input[0])
    let current = 1;
    let isBigger = false;
    let print = "";

    for (let rows = 1; rows <= num; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (current > num) {
                isBigger = true;
                break;
            }
            print += current + " ";
            current++;
        }
        console.log(print);
        print = "";
        if (isBigger) {
            break;
        }
    }


}

pyramideOfNumbers(["7"])