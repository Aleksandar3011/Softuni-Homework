function logistic(input){
    
    let numLoads = Number(input[0]);

    let busLoads = 0;
    let truckLoads = 0;
    let trainLoads = 0;
    let totalLoads= 0;
    let averagePerTon = 0; 

    for(let i = 1; i <= numLoads; i++){
        let loads = Number(input[i]);
        
        if(loads <= 3){
            busLoads += loads;
        }else if(loads >= 4 && loads <= 11){
            truckLoads += loads;
        }else if(loads >= 12){
            trainLoads += loads;
        }
        
    }
        totalLoads = busLoads + truckLoads + trainLoads;
        averagePerTon = ((busLoads * 200 + truckLoads * 175 + trainLoads * 120) / totalLoads).toFixed(2);
    
        console.log(averagePerTon);
        console.log(`${(busLoads / totalLoads * 100).toFixed(2)}%`);
        console.log(`${(truckLoads / totalLoads * 100).toFixed(2)}%`);
        console.log(`${(train / totalLoads * 100).toFixed(2)}%`);
}

logistic([`4`,
`1`,
`5`,
`16`,
`3`])
