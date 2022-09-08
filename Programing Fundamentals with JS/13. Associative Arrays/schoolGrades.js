function schoolGrades(input){
    let result = {};

    for(let line of input){
        line = line.split(` `);
        let name = line.shift();
        let currGrade = 0;


        for(let grade of line){
            currGrade += Number(grade)
        }

        if(result.hasOwnProperty(name)){
            let existing = Number(result[name]);
            let newGrade = (existing + (currGrade / 2)) / 2;
            result[name] = newGrade.toFixed(2);
        }else{
            result[name] = (currGrade / line.length).toFixed(2);
        }
    }
    let sorted = Object.entries(result)
    .sort((a, b) => a[0].localeCompare(b[0]));
    
    


    for (let [name, grade] of sorted) {
        console.log(`${name}: ${grade}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);