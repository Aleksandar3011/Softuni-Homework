function trainTheTrainers(input) {
    let index = 0;
    let numJury = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let totalSum = 0;
    let dell = 0;
    while (command !== "Finish") {
        dell++;
        let presentation = command;
        let sum = 0
        for (let i = 1; i <= numJury; i++) {
            let grade = Number(input[index]);
            index++;
            sum += grade
            totalSum += grade;
        }
        let averageGreade = sum / numJury;
        console.log(`${presentation} - ${averageGreade.toFixed(2)}.`);
        command = input[index];
        index++;

    }
    console.log(`Student's final assessment is ${((totalSum / numJury) / dell).toFixed(2)}.`);

}
trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"])




