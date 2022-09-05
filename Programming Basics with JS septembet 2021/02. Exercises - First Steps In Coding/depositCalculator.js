function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let yearPercent = Number(input[2]);
    let increas = (depositSum * yearPercent) / 100;
    let increasForMonth = increas / 12;
    let totalSum = depositSum + depositTerm * increasForMonth;

    console.log(totalSum);
}

depositCalculator(["200 ","3 ","5.7 "]);