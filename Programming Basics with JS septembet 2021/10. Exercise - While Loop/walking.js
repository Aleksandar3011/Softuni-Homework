function solve(input) {

    let index = 0;
    let currentSteps = input[index];
    index++;
    let steps = 0;
    while(currentSteps !== "Going home"){
        steps += Number(currentSteps);
        if(steps >= 10000){
            console.log(`Goal reached! Good job!`);
            console.log(`${steps - 10000} steps over the goal!`);
                break;
        }
        currentSteps = input[index];
        index++;
    }
    if(currentSteps === "Going home"){
        currentSteps = Number(input[index])
        index++;
        steps += currentSteps;
        if(steps >= 10000){
            console.log(`Goal reached! Good job!`);
            console.log(`${steps - 10000} steps over the goal!`);
            
        }else{
            console.log(`${10000 - steps} more steps to reach goal.`);
            
        }
    }
    
}
solve(["1000",
"1500",
"2000",
"6500"])





