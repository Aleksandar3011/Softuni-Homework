function climbing(input) {
    
    let numGroups = Number(input[0]);
    
    let climbers = 0;

    let musala = 0;
    let monbaln = 0;
    let kili = 0;
    let k2 = 0;
    let everest = 0;

    for(let i = 1; i <= numGroups; i++){
        let people = Number(input[i]);
        climbers+= people;
        if(people <= 5){
            musala+= people;
        }else if(people >= 6 && people <= 12){
            monbaln+= people;
        }else if(people >= 13 && people <= 25){
            kili+= people;
        }else if(people >= 26 && people <= 40){
            k2+= people;
        }else if(people >= 41){
            everest+= people;
        }

    }
    console.log(`${(musala / climbers * 100).toFixed(2)}%`);
    console.log(`${(monbaln / climbers * 100).toFixed(2)}%`);
    console.log(`${(kili / climbers * 100).toFixed(2)}%`);
    console.log(`${(k2 / climbers * 100).toFixed(2)}%`);
    console.log(`${(everest / climbers * 100).toFixed(2)}%`);
}

climbing(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
    
    


