function graduate(input) {
    let index = 0;
    let name = input[index];
    index++;
    let evaluation = Number(input[index]);

    let classes = 0;
    let averageEva = 0;
    let execute = 0;

    while(true){
        if(evaluation < 4.00){
            execute++;
        }
        if(execute > 1){
            console.log(`${name} has been excluded at ${classes} grade`);
            break;
        }
        
        classes++;
        averageEva += evaluation;
        if(classes === 12){
            averageEva /= classes;
    console.log(`${name} graduated. Average grade: ${averageEva.toFixed(2)}`);
            break;
        }
        
        index++;
        evaluation = Number(input[index])
    }

}
graduate(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])







