function equalSumsEvenOddPosition(input) {

    let firstNumber = Number(input[0])
    let secondNumber = Number(input[1]);
    let result = " ";

    for (let i = firstNumber; i <= secondNumber; i++) {
        let evenSum = 0;
        let oddSum = 0;
        let numToString = i + "";

        for (let j = 0; j < numToString.length; j++) {
            if (j % 2 === 0) {
                evenSum += Number(numToString[j])
            } else {
                oddSum += Number(numToString[j])
            }
        }
        if (evenSum === oddSum) {
            result += numToString + " ";
        }
    }

    console.log(result);

}
equalSumsEvenOddPosition(["100000",
    "100050"])
