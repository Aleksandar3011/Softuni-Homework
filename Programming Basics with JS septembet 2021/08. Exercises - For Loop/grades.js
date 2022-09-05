function grades(input) {

    let students = Number(input[0]);

    let stu1 = 0;
    let stu2 = 0;
    let stu3 = 0;
    let stu4 = 0;
    let averageGrades = 0;

    for(let i = 1; i <= students; i++){
        let grades = Number(input[i])
        if(grades >= 2.00 && grades <= 2.99){
            stu1++;
            averageGrades += grades;
        }else if(grades >= 3.00 && grades <= 3.99){
            stu2++;
            averageGrades += grades;
        }else if(grades >= 4.00 && grades <= 4.99){
            stu3++;
            averageGrades += grades;
        }else if(grades >= 5.00){
            stu4++;
            averageGrades += grades;
        }

    }
    
        console.log(`Top students: ${(stu4 / students * 100).toFixed(2)}%`);
        console.log(`Between 4.00 and 4.99: ${(stu3 / students * 100).toFixed(2)}%`);
        console.log(`Between 3.00 and 3.99: ${(stu2 / students * 100).toFixed(2)}%`);
        console.log(`Fail: ${(stu1 / students * 100).toFixed(2)}%`);
        console.log(`Average: ${(averageGrades / students).toFixed(2)}`);

}

grades([`6`,
`2`,
`3`,
`4`,
`5`,
`6`,
`2.2`])

