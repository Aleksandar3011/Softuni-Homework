function suppliesForSchool(input) {
    let pencils = Number(input[0]) * 5.80;
    let marker = Number(input[1]) * 7.20;
    let preparation = Number(input[2]) * 1.20;
    let percent = Number(input[3]) / 100;
    let sum = pencils + marker + preparation;
    let percentSum = sum * percent;
    let totalSum = sum - percentSum;

        console.log(totalSum);
}

suppliesForSchool(["2 ","3 ","4 ","25 "])