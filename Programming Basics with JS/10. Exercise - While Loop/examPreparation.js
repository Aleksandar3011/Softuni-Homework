function demo(input) {
 
    let index =0;
    let unsucessfull = Number(input[index++]);
    let command = input[index++];
    let fail =0;
    let isSuccess = true;
    let numberEx =0;
    let sumOfRatings =0;
    let lastProblem = '';
 
    while(command !== 'Enough'){
        let exName = command;
        let rating = Number(input[index++]);
        sumOfRatings+=rating;
        numberEx++;
        lastProblem = exName;
 
        if(rating <= 4){
            fail++;
        }
        if(fail === unsucessfull){
            console.log(`You need a break, ${fail} poor grades.`);
            isSuccess = false;
            break;
        }
 
        command = input[index++];
    }
   if(isSuccess){
       console.log(`Average score: ${(sumOfRatings/numberEx).toFixed(2)}`);
       console.log(`Number of problems: ${numberEx}`);
       console.log(`Last problem: ${lastProblem}`);
   }
}
demo(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])




