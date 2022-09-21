function tennisRanklist(input) {
    let index = 0;
    let tournaments = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++
    let totalPoints = 0;
    let averageTournamentsPoints = 0;
    let winT = 0;
    let percentWinT = 0;
    

    for(let i = 0; i < tournaments; i++){
        let stage = input[index];
        index++;
        if(stage === "W"){
            totalPoints += 2000;
            winT++;
        }else if(stage === "F"){
            totalPoints += 1200;
        }else if(stage === "SF"){
            totalPoints += 720;
        }
    }
    
    averageTournamentsPoints = totalPoints / tournaments;
    totalPoints+= startPoints;
    percentWinT = (winT / tournaments) * 100;
    
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averageTournamentsPoints)}`);
    console.log(`${percentWinT.toFixed(2)}%`);
    


}

tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
